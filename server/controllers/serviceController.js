const { Service } = require("../models/models");

class ServiceController {
    async createService(req, res) {
        try {
            const { Name, Cost, Specialization, Department_Id } = req.body;

            // Создание новой услуги
            const newService = await Service.create({
                Name,
                Cost,
                Specialization,
                Department_Id,
            });

            res.status(201).json(newService);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to create service" });
        }
    }

    async deleteServiceById(req, res) {
        try {
            const serviceId = req.params.id;

            // Удаление услуги по ID
            const deletedService = await Service.destroy({
                where: { ID: serviceId },
            });

            if (!deletedService) {
                return res.status(404).json({ error: "Service not found" });
            }

            res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to delete service" });
        }
    }

    async getServiceById(req, res) {
        try {
            const serviceId = req.params.id;

            // Поиск услуги по ID
            const service = await Service.findByPk(serviceId);

            if (!service) {
                return res.status(404).json({ error: "Service not found" });
            }

            res.status(200).json(service);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to get service by ID" });
        }
    }

    async getServiceList(req, res) {
        try {
            // Получение списка всех услуг
            const services = await Service.findAll();

            res.status(200).json(services);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to get service list" });
        }
    }

    async updateServiceById(req, res) {
        try {
            const serviceId = req.params.id;
            const { Name, Cost, Specialization, Department_Id } = req.body;

            // Обновление информации о услуге
            const updatedService = await Service.update(
                { Name, Cost, Specialization, Department_Id },
                { where: { ID: serviceId } }
            );

            if (!updatedService[0]) {
                return res.status(404).json({ error: "Service not found" });
            }

            res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to update service" });
        }
    }
}

module.exports = new ServiceController();
