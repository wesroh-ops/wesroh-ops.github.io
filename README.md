# 노연호 — 개인 소개 페이지

정적 HTML/CSS/JavaScript로 만든 **개인 소개 웹사이트** 저장소입니다.

**라이브 사이트:** [https://wesroh-ops.github.io](https://wesroh-ops.github.io)

## 구성

| 파일 | 설명 |
|------|------|
| `index.html` | 메인 페이지 |
| `style.css` | 스타일 |
| `script.js` | 인터랙션·동작 |
| `노연호.jpg` | 프로필 이미지 |
| `자기소개.txt` | 소개 문구 초안·참고용 텍스트 |

## 문서화 (Antigravity 표준 적용 범위)

프로젝트 구조·아키텍처·진행 상황·가이드·트러블슈팅은 **[doc/README.md](doc/README.md)** 아래에서 관리합니다.

| 경로 | 내용 |
|------|------|
| [doc/design/](doc/design/) | 아키텍처·Mermaid 다이어그램 |
| [doc/project/](doc/project/) | 마일스톤·백로그 |
| [doc/guide/](doc/guide/) | 로컬 개발·편집 규칙 |
| [doc/issue/](doc/issue/) | 배포·i18n 등 이슈 로그 |
| [infra/README.md](infra/README.md) | GitHub Pages 기준 인프라 범위 안내 |

> SvelteKit / FastAPI / MongoDB / Docker Compose 기반 **풀스택 보일러플레이트**는 이 저장소의 배포 방식과 맞지 않아 기본 구성에 포함하지 않았습니다. 필요 시 별도 저장소로 스캐폴딩하는 것을 권장합니다.

## 기술 스택

- HTML5  
- CSS3  
- Vanilla JavaScript (별도 프레임워크 없음)

## 로컬에서 보기

1. 저장소를 클론한 뒤 `index.html`을 브라우저에서 직접 열거나  
2. 간단한 정적 서버로 확인합니다.

```bash
# Python 3 예시
python3 -m http.server 8080
# 브라우저에서 http://localhost:8080
```

## 배포

GitHub Pages (`github-pages`)로 배포되어 위 라이브 URL에서 서비스됩니다.

## 라이선스

개인 포트폴리오·소개 목적의 저장소입니다.  
이미지·문구의 무단 전재·상업적 이용은 제한될 수 있습니다.
