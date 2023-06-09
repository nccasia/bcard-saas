-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "web" TEXT ,
    "phone" TEXT,
    "address" TEXT,
    "logo" TEXT,  
    "slogan" TEXT,
    "company" TEXT,
    "position" TEXT,
    "action" TEXT,
    "img" TEXT,
    "userId" TEXT NOT NULL,
    "slug" TEXT,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_email_key" ON "Profile"("email");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
