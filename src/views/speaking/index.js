import React from 'react';
import { ResourceAbout } from '../../components';
export {default as SpeakingIcon} from '@material-ui/icons/Mic';

const Speaking = () => {
  return (
    <ResourceAbout
      label="logistics.timeline.items.speaking.title"
      descriptionLabel="logistics.timeline.items.speaking.description"
      aside={false}
    />
  );
};

export default Speaking;
