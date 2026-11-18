# Zeta Text Flip

Zeta AI chat iframe용 대체어 유저스크립트. 기존 정상 작동한 v1 본체를 유지하고, Tampermonkey에는 짧은 GitHub 로더만 설치하는 구조입니다.

## 파일

- `text-flip.user.js`: 전체 기능을 포함한 본체. GitHub에서 수정할 파일
- `text-flip-loader.user.js`: Tampermonkey에 설치하는 짧은 로더

## 설치 / 기존 v1에서 전환

1. Tampermonkey에 설치된 기존 **Zeta Text Flip (iframe edition)** 스크립트를 먼저 열어 내용을 백업합니다.
2. 기존 스크립트의 전체 내용을 `text-flip-loader.user.js` 내용으로 **교체한 뒤 저장**합니다. 같은 스크립트를 수정해야 기존 Tampermonkey 저장소가 유지됩니다. 별도의 두 스크립트를 동시에 켜지 마세요.
3. 제타 채팅방을 새로고침합니다. 로더가 메인 페이지와 채팅 iframe에서 본체를 각각 한 번씩 가져옵니다.
4. 기존 공통/방별 대체어 목록과 수동 편집 기능을 확인합니다.

## 업데이트

GitHub의 `text-flip.user.js`만 수정하면 다음 새로고침 때 반영됩니다. 로더의 URL이나 권한을 바꿀 때만 로더를 수정합니다.

## 주의

- 본체가 GitHub에서 내려받아져 실행되므로 저장소 접근이 안 되면 도구가 실행되지 않습니다. 저장된 규칙은 지워지지 않습니다.
- `raw.githubusercontent.com`에 대한 Tampermonkey 연결 권한이 필요합니다.
- 코드 실행은 본체 전체를 신뢰하는 방식이므로 저장소 쓰기 권한을 안전하게 관리하세요.
- 로더로 바꾸는 첫 테스트는 수동반영으로 진행하세요.
