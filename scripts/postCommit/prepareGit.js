import console from "../modules/console.js";
console.info("Start initialization...");
import { isInGithubActions } from "../modules/octokit.js";
import { exit } from "process";
import { git } from "../modules/git.js";

if (!isInGithubActions) {
    console.info("Not running in github actions, exit.");
    exit(0);
}
console.info("Running in github actions, preparing git...");
const name = "github-actions";
const email = "actions@github.com";
console.info("name:", name);
console.info("email:", email);
await git
    .add(".")
    .addConfig("user.name", "github-actions")
    .addConfig("user.email", email)
    .addConfig("author.name", "github-actions")
    .addConfig("author.email", email)
    .addConfig("committer.name", "github-actions")
    .addConfig("committer.email", email);
