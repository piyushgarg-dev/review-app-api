/*
  Warnings:

  - You are about to drop the column `user_email` on the `form_responses` table. All the data in the column will be lost.
  - You are about to drop the column `user_image` on the `form_responses` table. All the data in the column will be lost.
  - You are about to drop the column `user_name` on the `form_responses` table. All the data in the column will be lost.
  - Added the required column `name` to the `form_responses` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "form_responses_user_email_key";

-- AlterTable
ALTER TABLE "form_responses" DROP COLUMN "user_email",
DROP COLUMN "user_image",
DROP COLUMN "user_name",
ADD COLUMN     "email" TEXT,
ADD COLUMN     "image_url" TEXT,
ADD COLUMN     "name" TEXT NOT NULL;
