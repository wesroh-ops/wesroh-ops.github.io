# 로컬 개발 가이드

## 필수 도구(이 저장소 기준)

| 도구 | 필요 여부 | 용도 |
|------|-----------|------|
| Git | 필수 | 버전 관리 |
| 최신 브라우저 | 필수 | 미리보기 |
| 정적 서버(선택) | 권장 | `file://`와 동작 차이 최소화 |

**Antigravity 풀스택 보일러플레이트**에서 사용하는 pnpm, uv, Docker 등은 **이 정적 사이트에는 필수가 아닙니다**. 다른 머신에서 풀스택 작업을 할 때는 해당 프로젝트 README를 따릅니다.

## 로컬에서 보기

```bash
cd /path/to/wesroh-ops.github.io
python3 -m http.server 8080
# 브라우저에서 http://localhost:8080
```

또는 VS Code / Cursor의 **Live Server** 등 동일 역할 확장을 사용해도 됩니다.

## 편집 시 규칙

1. **텍스트·번역**: 한국어 기본 문구는 `index.html`과 `script.js`의 `translations.ko`가 일치해야 합니다. 영어는 `translations.en`에 동일 키로 추가합니다.
2. **새 문단에 i18n 적용**: HTML에 `data-i18n="고유키"`를 넣고, `translations`의 `ko`/`en`에 문자열을 추가합니다.
3. **스타일**: 기존 CSS 변수(`:root`)를 우선 사용해 색·간격을 맞춥니다.
4. **이미지**: 프로필 등은 저장소 루트 경로를 유지하고, GitHub Pages에서 깨지지 않는지 배포 후 확인합니다.

## 링크 미리보기(SEO·OG)

`index.html`의 `<head>`에 `description`, `canonical`, Open Graph, Twitter Card, `Person` JSON-LD가 들어 있습니다.

- **도메인을 바꾸면** `link[rel="canonical"]`, `og:url`, `og:image`, `twitter:image`, JSON-LD의 `url`·`image`를 같은 호스트로 맞춥니다.
- **프로필 이미지 파일명을 바꾸면** 본문 `img`의 `src`뿐 아니라 위 메타·스키마의 이미지 URL도 함께 수정합니다. 한글 파일명은 크롤러 호환을 위해 퍼센트 인코딩된 URL을 사용합니다.

배포 후 카카오·슬랙 등에서 미리보기를 확인하려면 각 플랫폼의 **공유 디버거/스크랩 도구**(변경 시 캐시 초기화)를 활용합니다.

## 배포

- `main` 브랜치(또는 저장소 설정에 따른 소스) 푸시 후 GitHub Pages가 갱신됩니다.
- 캐시로 변경이 안 보이면 시크릿 창으로 확인하거나 Pages 설정의 커스텀 도메인·캐시를 점검합니다.

## 에이전트(Cursor 등)용 요약

- 범위: 정적 파일만 수정. 불필요하게 Node/Python 의존성을 추가하지 않습니다.
- 문서: 구조·결정 사항은 `doc/design`, 이슈는 `doc/issue`에 남깁니다.
