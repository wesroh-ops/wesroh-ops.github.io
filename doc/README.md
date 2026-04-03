# 문서 허브 (wesroh-ops.github.io)

이 저장소는 **Antigravity 표준**의 문서화·구조 원칙을 따르되, 배포는 **GitHub Pages 정적 호스팅**에 맞게 범위를 조정했습니다.

## 이 프로젝트와 Antigravity 보일러플레이트의 관계

| Antigravity 표준 | 이 저장소 적용 |
|------------------|----------------|
| `packages/python/...`, FastAPI, uv | **미적용** — 백엔드 없음 |
| `packages/web/...`, SvelteKit, pnpm | **미적용** — HTML/CSS/JS 단일 페이지 |
| `infra/` Docker Compose, user 1000:1000 | **선택** — [infra/README.md](../infra/README.md) 참고 |
| `/doc/design`, `/doc/project`, `/doc/guide`, `/doc/issue` | **적용** — 아래 디렉터리 |

풀스택 보일러플레이트(SvelteKit + FastAPI + MongoDB + Docker)로 이 사이트를 이전하려면 **별도 저장소 또는 브랜치**에서 스캐폴딩하는 것을 권장합니다. 현재 `main`은 Pages 배포와의 단순성을 유지합니다.

## 디렉터리 구조

| 경로 | 용도 |
|------|------|
| [design/](design/) | 아키텍처, 배포·데이터 흐름(Mermaid) |
| [project/](project/) | 마일스톤·작업 진척 |
| [guide/](guide/) | 로컬 개발, 편집 규칙, 에이전트용 요약 |
| [issue/](issue/) | 설치·배포·권한 등 트러블슈팅 로그 |

## 빠른 링크

- [아키텍처 / 배포 흐름](design/architecture.md)
- [로컬 개발 및 편집 가이드](guide/development.md)
- [진행 상황](project/progress.md)
- [트러블슈팅](issue/troubleshooting.md)
- [에이전트 핸드북](guide/agent-handbook.md)

루트 [README.md](../README.md)에서 저장소 개요와 라이브 URL을 확인할 수 있습니다.
