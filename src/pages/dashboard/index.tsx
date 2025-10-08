// Dashboard home page component
export default function DashboardHome() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your account.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="glass-hover rounded-xl border p-6">
          <h3 className="text-sm font-medium text-muted-foreground">Total Balance</h3>
          <p className="text-2xl font-bold">₹0.00</p>
        </div>
        <div className="glass-hover rounded-xl border p-6">
          <h3 className="text-sm font-medium text-muted-foreground">You Owe</h3>
          <p className="text-2xl font-bold text-destructive">₹0.00</p>
        </div>
        <div className="glass-hover rounded-xl border p-6">
          <h3 className="text-sm font-medium text-muted-foreground">You're Owed</h3>
          <p className="text-2xl font-bold text-green-600">₹0.00</p>
        </div>
        <div className="glass-hover rounded-xl border p-6">
          <h3 className="text-sm font-medium text-muted-foreground">Groups</h3>
          <p className="text-2xl font-bold">0</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="glass-hover rounded-xl border p-6">
          <h3 className="mb-4 text-lg font-medium">Recent Activity</h3>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">No recent activity</p>
          </div>
        </div>
        <div className="glass-hover rounded-xl border p-6">
          <h3 className="mb-4 text-lg font-medium">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex flex-col items-center justify-center rounded-lg border p-4 text-center hover:bg-muted/50">
              <span className="text-sm font-medium">Add Expense</span>
              <span className="text-xs text-muted-foreground">Record a new expense</span>
            </button>
            <button className="flex flex-col items-center justify-center rounded-lg border p-4 text-center hover:bg-muted/50">
              <span className="text-sm font-medium">Create Group</span>
              <span className="text-xs text-muted-foreground">Start a new group</span>
            </button>
            <button className="flex flex-col items-center justify-center rounded-lg border p-4 text-center hover:bg-muted/50">
              <span className="text-sm font-medium">Settle Up</span>
              <span className="text-xs text-muted-foreground">Record a payment</span>
            </button>
            <button className="flex flex-col items-center justify-center rounded-lg border p-4 text-center hover:bg-muted/50">
              <span className="text-sm font-medium">Invite Friends</span>
              <span className="text-xs text-muted-foreground">Grow your network</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
