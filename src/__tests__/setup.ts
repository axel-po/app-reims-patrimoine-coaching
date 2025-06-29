import { beforeEach, vi } from "vitest";
import "@testing-library/jest-dom";

// Mock console to avoid noise in tests unless explicitly needed
beforeEach(() => {
  vi.clearAllMocks();

  // Mock console.error to avoid noise from expected errors
  const originalError = console.error;

  console.error = vi.fn((...args: unknown[]) => {
    // Only show error if it's not from our test expectations
    if (!args[0]?.toString().includes("Error in")) {
      originalError(...args);
    }
  });

  console.log = vi.fn();
});

// Mock nuqs for components that use useQueryState
vi.mock("nuqs", () => ({
  useQueryState: vi.fn(() => [null, vi.fn()]),
}));
