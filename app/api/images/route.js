import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET /api/images - Get all images
export async function GET(req) {
  try {
    const images = await prisma.image.findMany({
      include: {
        tree: true,
      },
    });

    return NextResponse.json(images, { status: 200 });
  } catch (error) {
    console.error("Error fetching images:", error);
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 },
    );
  }
}

// POST /api/images - Create a new image
export async function POST(req) {
  try {
    const body = await req.json();
    const { link, treeId } = body;

    if (!link) {
      return NextResponse.json(
        { error: "Missing required field: link" },
        { status: 400 },
      );
    }

    const image = await prisma.image.create({
      data: {
        link,
        ...(treeId && { treeId }),
      },
      include: {
        tree: true,
      },
    });

    return NextResponse.json(image, { status: 201 });
  } catch (error) {
    console.error("Error creating image:", error);
    return NextResponse.json(
      { error: "Failed to create image" },
      { status: 500 },
    );
  }
}
