/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `forms` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "forms_slug_key" ON "forms"("slug");
