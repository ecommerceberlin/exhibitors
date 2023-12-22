import React from 'react';
import { ResourceAbout } from '../../components';
export {default as TechnicalGuidelinesIcon} from '@material-ui/icons/Pageview';

const TechnicalGuidelines = () => {
  return (
    <ResourceAbout
      label="logistics.timeline.items.technicalguidelines.title"
      descriptionLabel="logistics.timeline.items.technicalguidelines.description"
      aside={false}
    />
  );
};

export default TechnicalGuidelines;
