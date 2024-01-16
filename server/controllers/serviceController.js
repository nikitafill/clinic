const { Department, Service } = require("../models/models");

class ServiceController {
    async createService(req, res) {
        try {
            const { Name, Cost, Specialization, DepartmentId } = req.body;

            // Создание новой услуги
            const newService = await Service.create({
                Name,
                Cost,
                Specialization,
                DepartmentId,
            });

            res.status(201).json(newService);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to create service" });
        }
    }
    async deleteServiceById(req, res) {
        try {
            const serviceId = req.params.Id; // Use req.params.Id
    
            // Удаление услуги по ID
            const deletedService = await Service.destroy({
                where: { Id: serviceId },
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
            const serviceId = req.params.Id;

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

            const simplifiedServices = services.map(service => ({
                serviceName: service.Name,
                price: service.Cost,
                specialization: service.Specialization
            }));
    
            res.status(200).json(simplifiedServices);

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to get service list" });
        }
    }
    async getServicesByDepartmentName(req, res) {
        try {
          const departmentName = req.params.name;
      
          // Поиск департамента по названию
          const department = await Department.findOne({
            where: { Name: departmentName },
          });
      
          if (!department) {
            return res.status(404).json({ error: "Department not found" });
          }
      
          const departmentId = parseInt(department.Id, 10);
      
          // Поиск услуг по Id департамента
          const services = await Service.findAll({
            where: { DepartmentId: departmentId },
          });
      
          res.status(200).json({ departmentId, services });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Failed to get services by department name" });
        }
      }
      
    async updateServiceById(req, res) {
        try {
            const serviceId = req.params.Id;
            const { Name, Cost, Specialization, Department_Id } = req.body;

            // Обновление информации о услуге
            const updatedService = await Service.update(
                { Name, Cost, Specialization, Department_Id },
                { where: { Id: serviceId } }
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
