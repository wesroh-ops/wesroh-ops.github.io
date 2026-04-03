# 에이전트(Cursor 등) 작업 핸드북

이 저장소를 수정할 때 **에이전트가 지켜야 할 최소 규칙**입니다. (Antigravity의 `doc/guide`에 해당하는 로컬 표준입니다.)

## 범위

- **정적 사이트만**: `index.html`, `style.css`, `script.js` 및 루트 자산(이미지 등). 빌드 파이프라인·백엔드·DB를 이 저장소에 임의로 추가하지 않습니다.
- **배포**: GitHub Pages 호환을 깨지 않습니다(예: 서버 전용 API 라우트 없음).

## 편집 우선순위

1. 콘텐츠 변경은 HTML과 `script.js`의 `translations`를 **동시에** 고려합니다.
2. 스타일은 기존 CSS 변수와 패턴을 따릅니다.
3. 구조적·아키텍처 결정은 [doc/design/architecture.md](../design/architecture.md)를 갱신하거나, 이슈는 [doc/issue/troubleshooting.md](../issue/troubleshooting.md)에 남깁니다.

## Cursor Agent Skills

글로벌 스킬(예: PR 관리, 규칙 작성)은 사용자 환경의 `~/.cursor/skills-cursor/` 등에 정의된 **SKILL.md**를 따릅니다. 이 저장소 전용 반복 작업이 생기면, 동일 형식의 스킬을 추가하고 여기에 **스킬 파일 경로·적용 시점**을 한 줄로 링크해 두면 됩니다.

## 상호작용(사용자 가이드라인과 정렬)

- 인터랙티브 CLI(프로젝트 초기화 마법사 등)가 필요하면 **사용자에게 명령 실행을 요청**합니다.
- `sudo`가 필요하면 **사유를 명시**하고 사용자 승인을 받습니다.
- 인프라를 Docker로 확장할 때는 [infra/README.md](../../infra/README.md)와 `doc/issue`에 권한·포트 이슈를 기록합니다.
