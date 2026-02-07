-- CreateTable
CREATE TABLE "Mod" (
    "id" SERIAL NOT NULL,
    "modID" TEXT NOT NULL,
    "githubURL" TEXT,
    "displayURL" TEXT,

    CONSTRAINT "Mod_pkey" PRIMARY KEY ("id")
);
