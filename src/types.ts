export const UserStatus = {
    Active: "active",
    Inactive: "inactive",
    Pending: "pending",
} as const;

export type UserStatusType = typeof UserStatus[keyof typeof UserStatus];