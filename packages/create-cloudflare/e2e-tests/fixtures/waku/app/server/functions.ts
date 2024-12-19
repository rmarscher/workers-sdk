"use server";

export function test() {
  return {
    success: true,
    test: process.env.TEST,
  };
}
