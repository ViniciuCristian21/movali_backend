-- CreateTable
CREATE TABLE "evaluations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "note" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "id_movie" TEXT NOT NULL,
    CONSTRAINT "evaluations_id_movie_fkey" FOREIGN KEY ("id_movie") REFERENCES "movies" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
