import express from 'express';
import {
  getAllBarshops,
  getBarshopById,
  createBarshop,
  updateBarshop,
  deleteBarshop,
} from './barbershop.controller';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Barshops
 *   description: Barbershop management
 */

/**
 * @swagger
 * /barshops:
 *   post:
 *     summary: Create a new barshop
 *     tags: [Barshops]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - name
 *               - address
 *               - city
 *               - state
 *               - zipCode
 *               - phone
 *             properties:
 *               userId:
 *                 type: integer
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               city:
 *                 type: string
 *               state:
 *                 type: string
 *               zipCode:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/', createBarshop);


/**
 * @swagger
 * /barshops:
 *   get:
 *     summary: Get all barshops
 *     tags: [Barshops]
 *     responses:
 *       200:
 *         description: List of barshops
 */
router.get('/', getAllBarshops);

/**  
 * @swagger
 * /barshops/{id}:
 *   get:
 *     summary: Get a barshop by ID
 *     tags: [Barshops]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A barshop
 *       404:
 *         description: Not found
 */
router.get('/:id', getBarshopById);



/**
 * @swagger
 * /barshops/{id}:
 *   put:
 *     summary: Update a barshop
 *     tags: [Barshops]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               city:
 *                 type: string
 *               state:
 *                 type: string
 *               zipCode:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated
 */
router.put('/:id', updateBarshop);

/**
 * @swagger
 * /barshops/{id}:
 *   delete:
 *     summary: Delete a barshop
 *     tags: [Barshops]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Deleted
 */
router.delete('/:id', deleteBarshop);

export default router;
