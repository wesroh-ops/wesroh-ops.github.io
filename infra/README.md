# Infrastructure (`infra/`)

## 이 저장소에서의 역할

**wesroh-ops.github.io**는 **GitHub Pages**로 정적 파일을 배포합니다. Antigravity 표준의 **개발용 Thin Container + Docker Compose + MongoDB** 구성은 **필수 아님**입니다.

| 항목 | 상태 |
|------|------|
| Docker Compose | 미사용(기본) |
| 컨테이너 user `1000:1000` | 정적 배포와 무관 |
| 볼륨 마운트 `node_modules`, `.venv` | 해당 없음 |

## 언제 `infra`를 확장할까?

- 동일 저장소에서 **미리보기용 nginx** 컨테이너를 팀이 표준화하고 싶을 때 `docker-compose.yml`을 추가할 수 있습니다. 이 경우 [doc/issue/troubleshooting.md](../doc/issue/troubleshooting.md)에 포트·권한 이슈를 기록하세요.
- **백엔드 API·DB**가 필요해지면, Antigravity 모노레포 구조의 **별도 앱 저장소**로 분리하는 편이 Pages와 충돌하지 않습니다.

## 로컬 개발(권장)

```bash
python3 -m http.server 8080
```

자세한 내용은 [doc/guide/development.md](../doc/guide/development.md)를 참고합니다.
