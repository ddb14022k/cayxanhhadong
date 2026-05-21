import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET /api/categories - Get all categories
export async function GET(req) {
  try {
    const categories = await prisma.category.findMany({
      include: {
        trees: true,
        image: true,
      },
    });

    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 },
    );
  }
}

// POST /api/categories - Create a new category
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, description, imageId } = body;

    if (!name) {
      return NextResponse.json(
        { error: "Missing required field: name" },
        { status: 400 },
      );
    }

    const category = await prisma.category.create({
      data: {
        name,
        description: description || "",
        ...(imageId && { imageId }),
      },
      include: {
        trees: true,
        image: true,
      },
    });

    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json(
      { error: "Failed to create category" },
      { status: 500 },
    );
  }
}
