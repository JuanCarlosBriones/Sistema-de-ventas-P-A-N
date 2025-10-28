-- CreateTable
CREATE TABLE `Rol` (
    `id_rol` INTEGER NOT NULL AUTO_INCREMENT,
    `rol_name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Rol_rol_name_key`(`rol_name`),
    PRIMARY KEY (`id_rol`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `id_user` INTEGER NOT NULL AUTO_INCREMENT,
    `user_name` VARCHAR(191) NULL,
    `user_password` VARCHAR(191) NOT NULL,
    `RolId` INTEGER NOT NULL,

    PRIMARY KEY (`id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_RolId_fkey` FOREIGN KEY (`RolId`) REFERENCES `Rol`(`id_rol`) ON DELETE RESTRICT ON UPDATE CASCADE;
