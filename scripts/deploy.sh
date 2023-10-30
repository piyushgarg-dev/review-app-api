STAGE="$1"

echo "[$STAGE]: Migrate Primsa"
dotenv -c $STAGE -- prisma migrate deploy

echo "[$STAGE]: Generate Primsa Client"
npm run prisma:generate

echo "[$STAGE]: Start Serverless Deployment"
sls deploy --stage $STAGE
