import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET /api/trees - Get all trees
export async function GET(req) {
  try {
    const trees = await prisma.tree.findMany({
      include: {
        images: true,
        category: true,
      },
    });

    return NextResponse.json(trees, { status: 200 });
  } catch (error) {
    console.error("Error fetching trees:", error);
    return NextResponse.json(
      { error: "Failed to fetch trees" },
      { status: 500 },
    );
  }
}

// POST /api/trees - Create a new tree
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, description, categoryId } = body;

    if (!name || !categoryId) {
      return NextResponse.json(
        { error: "Missing required fields: name, categoryId" },
        { status: 400 },
      );
    }

    const tree = await prisma.tree.create({
      data: {
        name,
        description: description || "",
        categoryId,
      },
      include: {
        images: true,
        category: true,
      },
    });

    return NextResponse.json(tree, { status: 201 });
  } catch (error) {
    console.error("Error creating tree:", error);
    return NextResponse.json(
      { error: "Failed to create tree" },
      { status: 500 },
    );
  }
}
