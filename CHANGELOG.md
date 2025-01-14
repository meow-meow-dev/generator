# Changelog

## [3.3.2](https://github.com/meow-meow-dev/server-utilities/compare/v3.3.1...v3.3.2) (2025-01-11)


### Bug Fixes

* fix generated types ([#51](https://github.com/meow-meow-dev/server-utilities/issues/51)) ([30f5031](https://github.com/meow-meow-dev/server-utilities/commit/30f5031e361884f98c2cd6556ab3d211e5e0d316))

## [3.3.1](https://github.com/meow-meow-dev/server-utilities/compare/v3.3.0...v3.3.1) (2025-01-10)


### Bug Fixes

* stop using import.meta.env to determine http-only cookies options ([#48](https://github.com/meow-meow-dev/server-utilities/issues/48)) ([4dd100e](https://github.com/meow-meow-dev/server-utilities/commit/4dd100e96291de5efa504e0c24ceabcc102a09d9))

## [3.3.0](https://github.com/meow-meow-dev/server-utilities/compare/v3.2.0...v3.3.0) (2025-01-10)


### Features

* add authentication helpers ([#46](https://github.com/meow-meow-dev/server-utilities/issues/46)) ([00f0cc8](https://github.com/meow-meow-dev/server-utilities/commit/00f0cc86c6acccb2724c97932cea2f7f10fdf0ff))

## [3.2.0](https://github.com/meow-meow-dev/server-utilities/compare/v3.1.0...v3.2.0) (2025-01-10)


### Features

* ability to specify an expected text or json content for http matchers ([#44](https://github.com/meow-meow-dev/server-utilities/issues/44)) ([74cb24f](https://github.com/meow-meow-dev/server-utilities/commit/74cb24f1803a0075e6d263006dd6e8a0d561f592))

## [3.1.0](https://github.com/meow-meow-dev/server-utilities/compare/v3.0.1...v3.1.0) (2025-01-09)


### Features

* add helpers for durations & timestamps ([#42](https://github.com/meow-meow-dev/server-utilities/issues/42)) ([d001376](https://github.com/meow-meow-dev/server-utilities/commit/d001376fe89332d11ce25dd0c209e953f437f518))

## [3.0.1](https://github.com/meow-meow-dev/server-utilities/compare/v3.0.0...v3.0.1) (2025-01-09)


### Bug Fixes

* fix id token sub schema ([#40](https://github.com/meow-meow-dev/server-utilities/issues/40)) ([cc9f92c](https://github.com/meow-meow-dev/server-utilities/commit/cc9f92cfa58300f924ddf88bc9c1dc8d885c7b5c))

## [3.0.0](https://github.com/meow-meow-dev/server-utilities/compare/v2.0.0...v3.0.0) (2025-01-09)


### ⚠ BREAKING CHANGES

* add standard id token claims schemas, change access token's sub to string ([#38](https://github.com/meow-meow-dev/server-utilities/issues/38))

### Features

* add standard id token claims schemas, change access token's sub to string ([#38](https://github.com/meow-meow-dev/server-utilities/issues/38)) ([b9a1121](https://github.com/meow-meow-dev/server-utilities/commit/b9a112124033791f0c03bf188970fc98a104a2e8))

## [2.0.0](https://github.com/meow-meow-dev/server-utilities/compare/v1.4.0...v2.0.0) (2025-01-09)


### ⚠ BREAKING CHANGES

* add JWT timestamps & access tokens schema ([#36](https://github.com/meow-meow-dev/server-utilities/issues/36))

### Features

* add JWT timestamps & access tokens schema ([#36](https://github.com/meow-meow-dev/server-utilities/issues/36)) ([30f083a](https://github.com/meow-meow-dev/server-utilities/commit/30f083a86c5433cbf1b3d43456b3fd3ea8787777))

## [1.4.0](https://github.com/meow-meow-dev/server-utilities/compare/v1.3.1...v1.4.0) (2025-01-09)


### Features

* add HTTP matcher for 409 - Conflict ([#34](https://github.com/meow-meow-dev/server-utilities/issues/34)) ([c3a40ee](https://github.com/meow-meow-dev/server-utilities/commit/c3a40eee01fdfd423510ac7f34ec8a8f0a4418fb))

## [1.3.1](https://github.com/meow-meow-dev/server-utilities/compare/v1.3.0...v1.3.1) (2025-01-09)


### Bug Fixes

* **main:** trigger release ([10304d6](https://github.com/meow-meow-dev/server-utilities/commit/10304d6be2702391259710f7cc07d9161e93cfd9))

## [1.3.0](https://github.com/meow-meow-dev/server-utilities/compare/v1.2.2...v1.3.0) (2025-01-09)


### Features

* add http 409 Conflict ([#29](https://github.com/meow-meow-dev/server-utilities/issues/29)) ([689170b](https://github.com/meow-meow-dev/server-utilities/commit/689170b8dca4fe92ac8541403c75a306e7f54e70))

## [1.2.2](https://github.com/meow-meow-dev/server-utilities/compare/v1.2.1...v1.2.2) (2025-01-09)


### Bug Fixes

* fix declaration for getEnvironmentVariable ([#27](https://github.com/meow-meow-dev/server-utilities/issues/27)) ([394b7af](https://github.com/meow-meow-dev/server-utilities/commit/394b7af63107a6c5b9729ffe5acaeee1c0bd4eb3))

## [1.2.1](https://github.com/meow-meow-dev/server-utilities/compare/v1.2.0...v1.2.1) (2025-01-09)


### Bug Fixes

* fix compilation, stop hard-coding files list ([#25](https://github.com/meow-meow-dev/server-utilities/issues/25)) ([b1d6599](https://github.com/meow-meow-dev/server-utilities/commit/b1d6599abb5a0204e4076404b311a96d0c63177a))

## [1.2.0](https://github.com/meow-meow-dev/server-utilities/compare/v1.1.2...v1.2.0) (2025-01-09)


### Features

* add getEnvironmentVariable method in "/context" ([#23](https://github.com/meow-meow-dev/server-utilities/issues/23)) ([fb04327](https://github.com/meow-meow-dev/server-utilities/commit/fb043271fe11d1e87da2ed7272d6c6d489c266aa))

## [1.1.2](https://github.com/meow-meow-dev/server-utilities/compare/v1.1.1...v1.1.2) (2025-01-08)


### Bug Fixes

* fix outdated lockfile ([#21](https://github.com/meow-meow-dev/server-utilities/issues/21)) ([e39ddcd](https://github.com/meow-meow-dev/server-utilities/commit/e39ddcdf59571f038b9e7067ac07098e1839602b))

## [1.1.1](https://github.com/meow-meow-dev/server-utilities/compare/v1.1.0...v1.1.1) (2025-01-08)


### Bug Fixes

* add dist/test to published package ([#19](https://github.com/meow-meow-dev/server-utilities/issues/19)) ([dccfce9](https://github.com/meow-meow-dev/server-utilities/commit/dccfce9b87dcfbe2fe662e0989d9260ff8a777d4))

## [1.1.0](https://github.com/meow-meow-dev/server-utilities/compare/v1.0.7...v1.1.0) (2025-01-08)


### Features

* add http status matchers ([#17](https://github.com/meow-meow-dev/server-utilities/issues/17)) ([0d20e25](https://github.com/meow-meow-dev/server-utilities/commit/0d20e25d6a5e0e10cbef7528adf4576fcfc692a2))

## [1.0.7](https://github.com/meow-meow-dev/server-utilities/compare/v1.0.6...v1.0.7) (2025-01-07)


### Bug Fixes

* don't use import.meta.env in getHTTPOnlyCookieOptions ([#15](https://github.com/meow-meow-dev/server-utilities/issues/15)) ([be7dcac](https://github.com/meow-meow-dev/server-utilities/commit/be7dcac60fd946dd65d1571d2c4e81bed2917b87))

## [1.0.6](https://github.com/meow-meow-dev/server-utilities/compare/v1.0.5...v1.0.6) (2025-01-07)


### Bug Fixes

* fix exports once again ([#13](https://github.com/meow-meow-dev/server-utilities/issues/13)) ([f1096c1](https://github.com/meow-meow-dev/server-utilities/commit/f1096c1ce875123b164a8e670a4a71b5c02260fb))

## [1.0.5](https://github.com/meow-meow-dev/server-utilities/compare/v1.0.4...v1.0.5) (2025-01-07)


### Bug Fixes

* add missing exports & export from src/ first ([#11](https://github.com/meow-meow-dev/server-utilities/issues/11)) ([1defb5c](https://github.com/meow-meow-dev/server-utilities/commit/1defb5c725ea72497f361d15a993e6b374911507))

## [1.0.4](https://github.com/meow-meow-dev/server-utilities/compare/v1.0.3...v1.0.4) (2025-01-07)


### Bug Fixes

* export cookies ([#9](https://github.com/meow-meow-dev/server-utilities/issues/9)) ([8bc78c6](https://github.com/meow-meow-dev/server-utilities/commit/8bc78c6a42a14dd7ef6c74370ed3a05fbe9b0e95))

## [1.0.3](https://github.com/meow-meow-dev/server-utilities/compare/v1.0.2...v1.0.3) (2025-01-07)


### Bug Fixes

* add updated pnpm.lock ([#7](https://github.com/meow-meow-dev/server-utilities/issues/7)) ([34cd506](https://github.com/meow-meow-dev/server-utilities/commit/34cd506582d3842a4037f7b4377e54788ff27788))

## [1.0.2](https://github.com/meow-meow-dev/server-utilities/compare/v1.0.1...v1.0.2) (2025-01-07)


### Bug Fixes

* use clean-publish, add "files "field to package.json ([#5](https://github.com/meow-meow-dev/server-utilities/issues/5)) ([f2b5bd4](https://github.com/meow-meow-dev/server-utilities/commit/f2b5bd4a2dbfb96df78d20a731b903dbfdd3499f))

## [1.0.1](https://github.com/meow-meow-dev/server-utilities/compare/v1.0.0...v1.0.1) (2025-01-07)


### Bug Fixes

* add packageManager field to package.json ([#3](https://github.com/meow-meow-dev/server-utilities/issues/3)) ([451d262](https://github.com/meow-meow-dev/server-utilities/commit/451d262566f30fb7f28450218f944421f153bf58))

## 1.0.0 (2025-01-07)


### Bug Fixes

* initial library release ([#1](https://github.com/meow-meow-dev/server-utilities/issues/1)) ([5bcb015](https://github.com/meow-meow-dev/server-utilities/commit/5bcb015a43194fd54718e84a480af0976d0c591f))
