-- AddForeignKey
ALTER TABLE "barshop" ADD CONSTRAINT "barshop_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
