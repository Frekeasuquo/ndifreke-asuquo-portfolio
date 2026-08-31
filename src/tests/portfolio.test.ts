import { projects } from "@/data/portfolio";
import { findProjectBySlug } from "@/lib/portfolio";
import assert from "node:assert";


assert.equal(findProjectBySlug(projects, 'oapp')?.title, 'OAPP — Marketplace & Ordering Platform');
assert.equal(findProjectBySlug(projects, 'missing'), undefined);

console.log('portfolio utility tests passed');