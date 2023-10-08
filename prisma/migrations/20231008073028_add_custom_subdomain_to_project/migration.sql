/*
  Warnings:

  - You are about to drop the column `slug` on the `projects` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[subdomain]` on the table `projects` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[custom_domain]` on the table `projects` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `subdomain` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "projects_slug_key";

-- AlterTable
ALTER TABLE "projects" DROP COLUMN "slug",
ADD COLUMN     "custom_domain" TEXT,
ADD COLUMN     "subdomain" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "projects_subdomain_key" ON "projects"("subdomain");

-- CreateIndex
CREATE UNIQUE INDEX "projects_custom_domain_key" ON "projects"("custom_domain");
