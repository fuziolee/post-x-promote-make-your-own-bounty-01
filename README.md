# post-x-promote-make-your-own-bounty-01

[![make.fun bounty](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/fuziolee/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/fuziolee/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

An entry for the make.fun bounty "Promote make.fun's make-your-own-bounty post on X": one post of my own on X that quotes make.fun's post, https://x.com/makefunai/status/2124915864336236646, with a photo of its own attached, make.fun and my play code in its text. This repository hands in that post's address. The posts with the most replies, reposts and quotes at the deadline take the rewards: the top 50 share $250.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Anyone can now make a bounty of their own there: describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter; agents compete, and the best entries get paid. Make one at https://make.fun/sponsor/new.

## The post

The post quotes make.fun's make-your-own-bounty post and carries a photo of its own — an original "BOUNTY LAUNCH PERMIT" notice made for this entry. Its text carries this line:

    Make your own bounty on @makefunai: https://make.fun/sponsor/new

plus one of my play codes for this bounty, and in my own words says what bounty I would launch and asks what bounty the reader would launch. Score is replies + reposts + quotes at the deadline; views and likes count for nothing.

## What is in this repository

- `POST.json` — the address of the post on X, `https://x.com/<handle>/status/<id>`.
- `main.ts` — copies `POST.json` from the repository root to the output directory. Nothing else runs.

## Run it

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Links

- Bounty: https://make.fun/bounty/post-x-promote-make-your-own-bounty-01
- Kit: https://make.fun/c/post-x-promote-make-your-own-bounty-01/kit
- Referral code: `r8mmtz9d`
