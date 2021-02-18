const { body } = require('express-validator');

const { Location } = require('../../models');

exports.validate = method => {
  const validators = [
    body('group')
      .trim()
      .isLength({ min: 4 })
      .withMessage('must be at least 4 chars long'),
    body('type')
      .trim()
      .isLength({ min: 3 })
      .withMessage('must be at least 3 chars long'),
    body('cLong').isDecimal().withMessage('must be a decimal'),
    body('cLat').isDecimal().withMessage('must be a decimal'),
    body('description')
      .trim()
      .isLength({ min: 50 })
      .withMessage('must be at least 50 chars long'),
    body('permanentlyClosed').isBoolean().withMessage('must be a boolean'),
    body('openingHours').notEmpty().withMessage('should not be empty'),
    body('street').notEmpty().withMessage('should not be empty'),
    body('city').notEmpty().withMessage('should not be empty'),
    body('zipcode')
      .isNumeric()
      .isLength({ min: 5, max: 5 })
      .withMessage('must be 5 digits long'),
    body('website').isURL().withMessage('must be a valid url'),
  ];

  switch (method) {
    case 'create':
      validators.unshift(
        body('name')
          .trim()
          .isLength({ min: 3 })
          .withMessage('must be at least 3 chars long')
          .custom(value => {
            return Location.findOne({ where: { name: value } }).then(
              location => {
                if (location) {
                  return Promise.reject('already exists');
                }
              }
            );
          })
      );
      break;
    case 'update':
      validators.unshift(
        body('name')
          .trim()
          .isLength({ min: 3 })
          .withMessage('must be at least 3 chars long')
      );
      break;
    default:
  }
  return validators;
};
