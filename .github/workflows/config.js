module.exports = {
  platform: 'github',
  logLevel: 'info',
  automergeType: "pr", 
  onboarding: true,
  "extends": ["github>renovatebot/.github"],
  repositories: ['nghian2guyenbbv/gitHubCircleCi'],
  gitAuthor: "nghian2nguyenbbv <nghiashinhan96@gmail.com>",
  baseBranches: ["master"],
  platformAutomerge: false,
  dependencyDashboard: true,
  branchPrefix: "renovate/",
  dependencyDashboardTitle: "Dependency Dashboard Renovate",
  dependencyDashboardApproval: true
};