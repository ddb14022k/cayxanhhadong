import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET /api/trees/[id] - Get a single tree
export async function GET(req, { params }) {
  try {
    const { id } = await params;

    const tree = await prisma.tree.findUnique({
      where: { id },
      include: {
        images: true,
        category: true,
      },
    });

    if (!tree) {
      return NextResponse.json({ error: "Tree not found" }, { status: 404 });
    }

    return NextResponse.json(tree, { status: 200 });
  } catch (error) {
    console.error("Error fetching tree:", error);
    return NextResponse.json(
      { error: "Failed to fetch tree" },
      { status: 500 },
    );
  }
}

// PUT /api/trees/[id] - Update a tree
export async function PUT(req, { params }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { name, description, categoryId } = body;

    const tree = await prisma.tree.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(description && { description }),
        ...(categoryId && { categoryId }),
      },
      include: {
        images: true,
        category: true,
      },
    });

    return NextResponse.json(tree, { status: 200 });
  } catch (error) {
    console.error("Error updating tree:", error);
    return NextResponse.json(
      { error: "Failed to update tree" },
      { status: 500 },
    );
  }
}

// DELETE /api/trees/[id] - Delete a tree
export async function DELETE(req, { params }) {
  try {
    const { id } = await params;

    const tree = await prisma.tree.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Tree deleted successfully", tree },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error deleting tree:", error);
    return NextResponse.json(
      { error: "Failed to delete tree" },
      { status: 500 },
    );
  }
}
