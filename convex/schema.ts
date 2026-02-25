import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
    users: defineTable({ name: v.string(), email: v.string(), avatar: v.string(), role: v.string() }),
    standups: defineTable({ date: v.string(), status: v.string() }).index("by_date", ["date"]),
    updates: defineTable({ standupId: v.id("standups"), userId: v.id("users"), yesterday: v.string(), today: v.string(), blockers: v.optional(v.string()) }).index("by_standup", ["standupId"])
});
