/**
 * Single source of truth for the company's registered address.
 *
 * The footer, the contact page and the MedicalBusiness structured data in
 * index.html all show this address, so it lives here to stop the copies
 * drifting apart when it changes.
 */
export const COMPANY_LEGAL_NAME = 'Baraka for Medical Devices';

/** Street lines in Qatar's building / street / zone order. */
export const ADDRESS_LINES = [
  'Building 64, Street 950, Zone 27',
  'Floor 3, Unit 1',
  'Doha, Qatar',
];

/** Flattened form, for anywhere that needs the address on one line. */
export const ADDRESS_ONE_LINE = ADDRESS_LINES.join(', ');
