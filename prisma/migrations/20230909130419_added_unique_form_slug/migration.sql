/*
  Warnings:

  - A unique constraint covering the columns `[slug,project_id]` on the table `forms` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "forms_slug_project_id_key" ON "forms"("slug", "project_id");
