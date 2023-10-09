-- CreateEnum
CREATE TYPE "AuthenticationType" AS ENUM ('EMAIL_PASSWORD', 'GOOGLE');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "ProjectAccessRole" AS ENUM ('OWNER', 'ADMIN');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT,
    "email" TEXT NOT NULL,
    "email_verified" BOOLEAN NOT NULL DEFAULT false,
    "password" TEXT,
    "salt" TEXT,
    "authentication_type" "AuthenticationType" NOT NULL,
    "profileImageURL" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "subdomain" TEXT NOT NULL,
    "custom_domain" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_access_mapping" (
    "project_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "role" "ProjectAccessRole" NOT NULL DEFAULT 'OWNER'
);

-- CreateTable
CREATE TABLE "forms" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "intro_title" TEXT NOT NULL,
    "intro_message" TEXT,
    "prompt_title" TEXT NOT NULL,
    "prompt_description" TEXT,
    "thankyou_title" TEXT NOT NULL,
    "thankyou_message" TEXT,
    "enable_cta" BOOLEAN NOT NULL DEFAULT false,
    "cta_title" TEXT,
    "cta_url" TEXT,
    "project_id" TEXT NOT NULL,
    "created_by" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "primary_color_hex_code" TEXT NOT NULL DEFAULT '#6701E6',
    "background_color_hex_code" TEXT NOT NULL DEFAULT '#FFFFFF',
    "lang" TEXT NOT NULL DEFAULT 'en',
    "collect_video_testimonials" BOOLEAN NOT NULL DEFAULT false,
    "collect_text_testimonials" BOOLEAN NOT NULL DEFAULT true,
    "collect_ratings" BOOLEAN NOT NULL DEFAULT true,
    "collect_images" BOOLEAN NOT NULL DEFAULT true,
    "collect_email" BOOLEAN NOT NULL DEFAULT true,
    "collect_job_title" BOOLEAN NOT NULL DEFAULT true,
    "collect_user_image" BOOLEAN NOT NULL DEFAULT true,
    "collect_website_url" BOOLEAN NOT NULL DEFAULT true,
    "collect_company" BOOLEAN NOT NULL DEFAULT true,
    "auto_approve_testimonials" BOOLEAN NOT NULL DEFAULT false,
    "auto_add_tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "forms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "form_responses" (
    "id" TEXT NOT NULL,
    "form_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "image_url" TEXT,
    "rating" INTEGER,
    "testimonial" TEXT NOT NULL,
    "job_title" TEXT,
    "website_url" TEXT,
    "company" TEXT,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "form_responses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "projects_subdomain_key" ON "projects"("subdomain");

-- CreateIndex
CREATE UNIQUE INDEX "projects_custom_domain_key" ON "projects"("custom_domain");

-- CreateIndex
CREATE UNIQUE INDEX "project_access_mapping_project_id_user_id_key" ON "project_access_mapping"("project_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "forms_slug_project_id_key" ON "forms"("slug", "project_id");

-- AddForeignKey
ALTER TABLE "project_access_mapping" ADD CONSTRAINT "project_access_mapping_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_access_mapping" ADD CONSTRAINT "project_access_mapping_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "forms" ADD CONSTRAINT "forms_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "forms" ADD CONSTRAINT "forms_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "form_responses" ADD CONSTRAINT "form_responses_form_id_fkey" FOREIGN KEY ("form_id") REFERENCES "forms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
