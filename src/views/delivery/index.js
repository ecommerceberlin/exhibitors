import React from 'react';
import { ResourceAbout } from '../../components';
export {default as DeliveryIcon} from '@material-ui/icons/LocalShipping';

const Delivery = () => {
  return (
    <ResourceAbout
      label="logistics.timeline.items.delivery.title"
      descriptionLabel="logistics.timeline.items.delivery.description"
      aside={false}
    />
  );
};

export default Delivery;
