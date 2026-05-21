import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET /api/images/[id] - Get a single image
export async function GET(req, { params }) {
  try {
    const { id } = await params;

    const image = await prisma.image.findUnique({
      where: { id },
      include: {
        tree: true,
      },
    });

    if (!image) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    return NextResponse.json(image, { status: 200 });
  } catch (error) {
    console.error("Error fetching image:", error);
    return NextResponse.json(
      { error: "Failed to fetch image" },
      { status: 500 },
    );
  }
}

// PUT /api/images/[id] - Update an image
export async function PUT(req, { params }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { link, treeId } = body;

    const image = await prisma.image.update({
      where: { id },
      data: {
        ...(link && { link }),
        ...(treeId !== undefined && { treeId }),
      },
      include: {
        tree: true,
      },
    });

    return NextResponse.json(image, { status: 200 });
  } catch (error) {
    console.error("Error updating image:", error);
    return NextResponse.json(
      { error: "Failed to update image" },
      { status: 500 },
    );
  }
}

// DELETE /api/images/[id] - Delete an image
export async function DELETE(req, { params }) {
  try {
    const { id } = await params;

    const image = await prisma.image.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Image deleted successfully", image },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error deleting image:", error);
    return NextResponse.json(
      { error: "Failed to delete image" },
      { status: 500 },
    );
  }
}
