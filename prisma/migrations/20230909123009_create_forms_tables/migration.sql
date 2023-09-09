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

-- AddForeignKey
ALTER TABLE "forms" ADD CONSTRAINT "forms_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "forms" ADD CONSTRAINT "forms_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
