# Masukkan URL webhook Discord
WEBHOOK_URL="https://discord.com/api/webhooks/1109830678062829630/KayUgzHMMT9SfQDZ3T4123XpW9KgS_MN38InNk7ByrwAb0LG4UYA9gFf3UjIE7UlfDz-"

# Ambil informasi revisi terakhir
COMMIT_MESSAGE=$(git log -1 --pretty=format:"%s")
USERNAME=$(git log -1 --pretty=format:"%an")
REPO_NAME=$(basename -s .git $(git remote get-url origin))

# Membuat payload JSON dengan emoji
payload=$(cat <<EOF
{
  "content": "\```#$USERNAME #$REPO_NAME \n $COMMIT_MESSAGE\```"
}
EOF
)

# Kirim permintaan POST ke webhook Discord
curl -H "Content-Type: application/json" -X POST -d "$payload" $WEBHOOK_URL
