import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import CardCompany from './components/CardCompany';

interface BusinessModel {
  id: string;
  name: string;
  visible: boolean;
  isActive: boolean;
}

interface TypeOrganization {
  id: string;
  name: string;
  visible: boolean;
  isActive: boolean;
}
interface User {
  profile: string | null;
}

export interface Organization {
  id: string;
  isVerify: boolean;
  userId: string;
  nameLao: string;
  nameEng: string;
  cProvice: string;
  cDistrict: string;
  cVillage: string;
  street: string;
  businessModel: BusinessModel;
  typeOrganinzations: TypeOrganization;
  users: User;
}

const data: Organization[] = [
  {
    id: '09b24734-1e6b-431f-b4f3-54326dd9cb66',
    isVerify: true,
    userId: '160563e8-b33b-4a67-8eaf-84f15785bad1',
    nameLao: 'ບໍລິສັດສີສະຫວັດ',
    nameEng: 'Sesavant company',
    cProvice: 'ນະຄອນຫຼວງວຽງຈັນ',
    cDistrict: 'ຈັນທະບູລີ',
    cVillage: 'ດອນແດງ',
    street: 'ຮ່ອມ9',
    businessModel: {
      id: 'bbd424a4-4ce4-478c-8cb9-e4766385da27',
      name: 'Julia Pouros Julia Pouros Julia PourosJulia Pouros',
      visible: true,
      isActive: true,
    },
    typeOrganinzations: {
      id: '43e44434-1473-40cc-8dd5-7e9c2b7f6214',
      name: 'Everett Torp',
      visible: false,
      isActive: true,
    },
    users: {
      profile:
        'http://res.cloudinary.com/dq3d5qshp/image/upload/v1737875303/testSM/IMG_1737875298924.webp',
    },
  },
  {
    id: 'e426a436-241d-4d12-b1b8-f27729d8ec6c',
    isVerify: true,
    userId: 'cf3ccf26-e399-4cbf-a8a9-16be83a1eaf3',
    nameLao: 'ບໍລິສັດສີສະຫວັດ',
    nameEng: 'Sesavant company Sesavant company Sesavant company',
    cProvice: 'ນະຄອນຫຼວງວຽງຈັນ',
    cDistrict: 'ຈັນທະບູລີ',
    cVillage: 'ດອນແດງ',
    street: 'ຮ່ອມ9',

    businessModel: {
      id: 'c6ca90d2-88c7-4b66-bf1d-eefdf8be32ca',
      name: 'Emmett',
      visible: false,
      isActive: false,
    },
    typeOrganinzations: {
      id: '43e44434-1473-40cc-8dd5-7e9c2b7f6214',
      name: 'Everett Torp',
      visible: false,
      isActive: true,
    },
    users: {
      profile: null,
    },
  },
  {
    id: '5aafd687-7c25-4274-8161-9a32997bc08d',
    isVerify: false,
    userId: 'c706c46b-6113-46a0-96f1-6ad49c265a73',
    nameLao: 'ບໍລິສັດສີສະຫວັດ',
    nameEng: 'Sesavant company',

    cProvice: 'ນະຄອນຫຼວງວຽງຈັນ',
    cDistrict: 'ຈັນທະບູລີ',
    cVillage: 'ດອນແດງ',
    street: 'ຮ່ອມ9',

    businessModel: {
      id: 'bbd424a4-4ce4-478c-8cb9-e4766385da27',
      name: 'Julia Pouros',
      visible: true,
      isActive: true,
    },
    typeOrganinzations: {
      id: '43e44434-1473-40cc-8dd5-7e9c2b7f6214',
      name: 'Everett Torp',
      visible: false,
      isActive: true,
    },
    users: {
      profile:
        'http://res.cloudinary.com/dq3d5qshp/image/upload/v1737875390/testSM/IMG_1737875385901.webp',
    },
  },
  {
    id: '09b24734-1e6b-431f-b4f3-54326dd9cb66',
    isVerify: true,
    userId: '160563e8-b33b-4a67-8eaf-84f15785bad1',
    nameLao: 'ບໍລິສັດສີສະຫວັດ',
    nameEng: 'Sesavant company',
    cProvice: 'ນະຄອນຫຼວງວຽງຈັນ',
    cDistrict: 'ຈັນທະບູລີ',
    cVillage: 'ດອນແດງ',
    street: 'ຮ່ອມ9',
    businessModel: {
      id: 'bbd424a4-4ce4-478c-8cb9-e4766385da27',
      name: 'Julia Pouros Julia Pouros Julia PourosJulia Pouros',
      visible: true,
      isActive: true,
    },
    typeOrganinzations: {
      id: '43e44434-1473-40cc-8dd5-7e9c2b7f6214',
      name: 'Everett Torp',
      visible: false,
      isActive: true,
    },
    users: {
      profile:
        'http://res.cloudinary.com/dq3d5qshp/image/upload/v1737875303/testSM/IMG_1737875298924.webp',
    },
  },
  {
    id: 'e426a436-241d-4d12-b1b8-f27729d8ec6c',
    isVerify: true,
    userId: 'cf3ccf26-e399-4cbf-a8a9-16be83a1eaf3',
    nameLao: 'ບໍລິສັດສີສະຫວັດ',
    nameEng: 'Sesavant company Sesavant company Sesavant company',
    cProvice: 'ນະຄອນຫຼວງວຽງຈັນ',
    cDistrict: 'ຈັນທະບູລີ',
    cVillage: 'ດອນແດງ',
    street: 'ຮ່ອມ9',

    businessModel: {
      id: 'c6ca90d2-88c7-4b66-bf1d-eefdf8be32ca',
      name: 'Emmett',
      visible: false,
      isActive: false,
    },
    typeOrganinzations: {
      id: '43e44434-1473-40cc-8dd5-7e9c2b7f6214',
      name: 'Everett Torp',
      visible: false,
      isActive: true,
    },
    users: {
      profile: null,
    },
  },
  {
    id: '5aafd687-7c25-4274-8161-9a32997bc08d',
    isVerify: false,
    userId: 'c706c46b-6113-46a0-96f1-6ad49c265a73',
    nameLao: 'ບໍລິສັດສີສະຫວັດ',
    nameEng: 'Sesavant company',

    cProvice: 'ນະຄອນຫຼວງວຽງຈັນ',
    cDistrict: 'ຈັນທະບູລີ',
    cVillage: 'ດອນແດງ',
    street: 'ຮ່ອມ9',

    businessModel: {
      id: 'bbd424a4-4ce4-478c-8cb9-e4766385da27',
      name: 'Julia Pouros',
      visible: true,
      isActive: true,
    },
    typeOrganinzations: {
      id: '43e44434-1473-40cc-8dd5-7e9c2b7f6214',
      name: 'Everett Torp',
      visible: false,
      isActive: true,
    },
    users: {
      profile:
        'http://res.cloudinary.com/dq3d5qshp/image/upload/v1737875390/testSM/IMG_1737875385901.webp',
    },
  },
  {
    id: '09b24734-1e6b-431f-b4f3-54326dd9cb66',
    isVerify: true,
    userId: '160563e8-b33b-4a67-8eaf-84f15785bad1',
    nameLao: 'ບໍລິສັດສີສະຫວັດ',
    nameEng: 'Sesavant company',
    cProvice: 'ນະຄອນຫຼວງວຽງຈັນ',
    cDistrict: 'ຈັນທະບູລີ',
    cVillage: 'ດອນແດງ',
    street: 'ຮ່ອມ9',
    businessModel: {
      id: 'bbd424a4-4ce4-478c-8cb9-e4766385da27',
      name: 'Julia Pouros Julia Pouros Julia PourosJulia Pouros',
      visible: true,
      isActive: true,
    },
    typeOrganinzations: {
      id: '43e44434-1473-40cc-8dd5-7e9c2b7f6214',
      name: 'Everett Torp',
      visible: false,
      isActive: true,
    },
    users: {
      profile:
        'http://res.cloudinary.com/dq3d5qshp/image/upload/v1737875303/testSM/IMG_1737875298924.webp',
    },
  },
  {
    id: 'e426a436-241d-4d12-b1b8-f27729d8ec6c',
    isVerify: true,
    userId: 'cf3ccf26-e399-4cbf-a8a9-16be83a1eaf3',
    nameLao: 'ບໍລິສັດສີສະຫວັດ',
    nameEng: 'Sesavant company Sesavant company Sesavant company',
    cProvice: 'ນະຄອນຫຼວງວຽງຈັນ',
    cDistrict: 'ຈັນທະບູລີ',
    cVillage: 'ດອນແດງ',
    street: 'ຮ່ອມ9',

    businessModel: {
      id: 'c6ca90d2-88c7-4b66-bf1d-eefdf8be32ca',
      name: 'Emmett',
      visible: false,
      isActive: false,
    },
    typeOrganinzations: {
      id: '43e44434-1473-40cc-8dd5-7e9c2b7f6214',
      name: 'Everett Torp',
      visible: false,
      isActive: true,
    },
    users: {
      profile: null,
    },
  },
  {
    id: '5aafd687-7c25-4274-8161-9a32997bc08d',
    isVerify: false,
    userId: 'c706c46b-6113-46a0-96f1-6ad49c265a73',
    nameLao: 'ບໍລິສັດສີສະຫວັດ',
    nameEng: 'Sesavant company',

    cProvice: 'ນະຄອນຫຼວງວຽງຈັນ',
    cDistrict: 'ຈັນທະບູລີ',
    cVillage: 'ດອນແດງ',
    street: 'ຮ່ອມ9',

    businessModel: {
      id: 'bbd424a4-4ce4-478c-8cb9-e4766385da27',
      name: 'Julia Pouros',
      visible: true,
      isActive: true,
    },
    typeOrganinzations: {
      id: '43e44434-1473-40cc-8dd5-7e9c2b7f6214',
      name: 'Everett Torp',
      visible: false,
      isActive: true,
    },
    users: {
      profile:
        'http://res.cloudinary.com/dq3d5qshp/image/upload/v1737875390/testSM/IMG_1737875385901.webp',
    },
  },
  {
    id: '09b24734-1e6b-431f-b4f3-54326dd9cb66',
    isVerify: true,
    userId: '160563e8-b33b-4a67-8eaf-84f15785bad1',
    nameLao: 'ບໍລິສັດສີສະຫວັດ',
    nameEng: 'Sesavant company',
    cProvice: 'ນະຄອນຫຼວງວຽງຈັນ',
    cDistrict: 'ຈັນທະບູລີ',
    cVillage: 'ດອນແດງ',
    street: 'ຮ່ອມ9',
    businessModel: {
      id: 'bbd424a4-4ce4-478c-8cb9-e4766385da27',
      name: 'Julia Pouros Julia Pouros Julia PourosJulia Pouros',
      visible: true,
      isActive: true,
    },
    typeOrganinzations: {
      id: '43e44434-1473-40cc-8dd5-7e9c2b7f6214',
      name: 'Everett Torp',
      visible: false,
      isActive: true,
    },
    users: {
      profile:
        'http://res.cloudinary.com/dq3d5qshp/image/upload/v1737875303/testSM/IMG_1737875298924.webp',
    },
  },
  {
    id: 'e426a436-241d-4d12-b1b8-f27729d8ec6c',
    isVerify: true,
    userId: 'cf3ccf26-e399-4cbf-a8a9-16be83a1eaf3',
    nameLao: 'ບໍລິສັດສີສະຫວັດ',
    nameEng: 'Sesavant company Sesavant company Sesavant company',
    cProvice: 'ນະຄອນຫຼວງວຽງຈັນ',
    cDistrict: 'ຈັນທະບູລີ',
    cVillage: 'ດອນແດງ',
    street: 'ຮ່ອມ9',

    businessModel: {
      id: 'c6ca90d2-88c7-4b66-bf1d-eefdf8be32ca',
      name: 'Emmett',
      visible: false,
      isActive: false,
    },
    typeOrganinzations: {
      id: '43e44434-1473-40cc-8dd5-7e9c2b7f6214',
      name: 'Everett Torp',
      visible: false,
      isActive: true,
    },
    users: {
      profile: null,
    },
  },
  {
    id: '5aafd687-7c25-4274-8161-9a32997bc08d',
    isVerify: false,
    userId: 'c706c46b-6113-46a0-96f1-6ad49c265a73',
    nameLao: 'ບໍລິສັດສີສະຫວັດ',
    nameEng: 'Sesavant company',

    cProvice: 'ນະຄອນຫຼວງວຽງຈັນ',
    cDistrict: 'ຈັນທະບູລີ',
    cVillage: 'ດອນແດງ',
    street: 'ຮ່ອມ9',

    businessModel: {
      id: 'bbd424a4-4ce4-478c-8cb9-e4766385da27',
      name: 'Julia Pouros',
      visible: true,
      isActive: true,
    },
    typeOrganinzations: {
      id: '43e44434-1473-40cc-8dd5-7e9c2b7f6214',
      name: 'Everett Torp',
      visible: false,
      isActive: true,
    },
    users: {
      profile:
        'http://res.cloudinary.com/dq3d5qshp/image/upload/v1737875390/testSM/IMG_1737875385901.webp',
    },
  },
  {
    id: '09b24734-1e6b-431f-b4f3-54326dd9cb66',
    isVerify: true,
    userId: '160563e8-b33b-4a67-8eaf-84f15785bad1',
    nameLao: 'ບໍລິສັດສີສະຫວັດ',
    nameEng: 'Sesavant company',
    cProvice: 'ນະຄອນຫຼວງວຽງຈັນ',
    cDistrict: 'ຈັນທະບູລີ',
    cVillage: 'ດອນແດງ',
    street: 'ຮ່ອມ9',
    businessModel: {
      id: 'bbd424a4-4ce4-478c-8cb9-e4766385da27',
      name: 'Julia Pouros Julia Pouros Julia PourosJulia Pouros',
      visible: true,
      isActive: true,
    },
    typeOrganinzations: {
      id: '43e44434-1473-40cc-8dd5-7e9c2b7f6214',
      name: 'Everett Torp',
      visible: false,
      isActive: true,
    },
    users: {
      profile:
        'http://res.cloudinary.com/dq3d5qshp/image/upload/v1737875303/testSM/IMG_1737875298924.webp',
    },
  },
  {
    id: 'e426a436-241d-4d12-b1b8-f27729d8ec6c',
    isVerify: true,
    userId: 'cf3ccf26-e399-4cbf-a8a9-16be83a1eaf3',
    nameLao: 'ບໍລິສັດສີສະຫວັດ',
    nameEng: 'Sesavant company Sesavant company Sesavant company',
    cProvice: 'ນະຄອນຫຼວງວຽງຈັນ',
    cDistrict: 'ຈັນທະບູລີ',
    cVillage: 'ດອນແດງ',
    street: 'ຮ່ອມ9',

    businessModel: {
      id: 'c6ca90d2-88c7-4b66-bf1d-eefdf8be32ca',
      name: 'Emmett',
      visible: false,
      isActive: false,
    },
    typeOrganinzations: {
      id: '43e44434-1473-40cc-8dd5-7e9c2b7f6214',
      name: 'Everett Torp',
      visible: false,
      isActive: true,
    },
    users: {
      profile: null,
    },
  },
  {
    id: '5aafd687-7c25-4274-8161-9a32997bc08d',
    isVerify: false,
    userId: 'c706c46b-6113-46a0-96f1-6ad49c265a73',
    nameLao: 'ບໍລິສັດສີສະຫວັດ',
    nameEng: 'Sesavant company',

    cProvice: 'ນະຄອນຫຼວງວຽງຈັນ',
    cDistrict: 'ຈັນທະບູລີ',
    cVillage: 'ດອນແດງ',
    street: 'ຮ່ອມ9',

    businessModel: {
      id: 'bbd424a4-4ce4-478c-8cb9-e4766385da27',
      name: 'Julia Pouros',
      visible: true,
      isActive: true,
    },
    typeOrganinzations: {
      id: '43e44434-1473-40cc-8dd5-7e9c2b7f6214',
      name: 'Everett Torp',
      visible: false,
      isActive: true,
    },
    users: {
      profile:
        'http://res.cloudinary.com/dq3d5qshp/image/upload/v1737875390/testSM/IMG_1737875385901.webp',
    },
  },
  {
    id: '09b24734-1e6b-431f-b4f3-54326dd9cb66',
    isVerify: true,
    userId: '160563e8-b33b-4a67-8eaf-84f15785bad1',
    nameLao: 'ບໍລິສັດສີສະຫວັດ',
    nameEng: 'Sesavant company',
    cProvice: 'ນະຄອນຫຼວງວຽງຈັນ',
    cDistrict: 'ຈັນທະບູລີ',
    cVillage: 'ດອນແດງ',
    street: 'ຮ່ອມ9',
    businessModel: {
      id: 'bbd424a4-4ce4-478c-8cb9-e4766385da27',
      name: 'Julia Pouros Julia Pouros Julia PourosJulia Pouros',
      visible: true,
      isActive: true,
    },
    typeOrganinzations: {
      id: '43e44434-1473-40cc-8dd5-7e9c2b7f6214',
      name: 'Everett Torp',
      visible: false,
      isActive: true,
    },
    users: {
      profile:
        'http://res.cloudinary.com/dq3d5qshp/image/upload/v1737875303/testSM/IMG_1737875298924.webp',
    },
  },
  {
    id: 'e426a436-241d-4d12-b1b8-f27729d8ec6c',
    isVerify: true,
    userId: 'cf3ccf26-e399-4cbf-a8a9-16be83a1eaf3',
    nameLao: 'ບໍລິສັດສີສະຫວັດ',
    nameEng: 'Sesavant company Sesavant company Sesavant company',
    cProvice: 'ນະຄອນຫຼວງວຽງຈັນ',
    cDistrict: 'ຈັນທະບູລີ',
    cVillage: 'ດອນແດງ',
    street: 'ຮ່ອມ9',

    businessModel: {
      id: 'c6ca90d2-88c7-4b66-bf1d-eefdf8be32ca',
      name: 'Emmett',
      visible: false,
      isActive: false,
    },
    typeOrganinzations: {
      id: '43e44434-1473-40cc-8dd5-7e9c2b7f6214',
      name: 'Everett Torp',
      visible: false,
      isActive: true,
    },
    users: {
      profile: null,
    },
  },
  {
    id: '5aafd687-7c25-4274-8161-9a32997bc08d',
    isVerify: false,
    userId: 'c706c46b-6113-46a0-96f1-6ad49c265a73',
    nameLao: 'ບໍລິສັດສີສະຫວັດ',
    nameEng: 'Sesavant company',

    cProvice: 'ນະຄອນຫຼວງວຽງຈັນ',
    cDistrict: 'ຈັນທະບູລີ',
    cVillage: 'ດອນແດງ',
    street: 'ຮ່ອມ9',

    businessModel: {
      id: 'bbd424a4-4ce4-478c-8cb9-e4766385da27',
      name: 'Julia Pouros',
      visible: true,
      isActive: true,
    },
    typeOrganinzations: {
      id: '43e44434-1473-40cc-8dd5-7e9c2b7f6214',
      name: 'Everett Torp',
      visible: false,
      isActive: true,
    },
    users: {
      profile:
        'http://res.cloudinary.com/dq3d5qshp/image/upload/v1737875390/testSM/IMG_1737875385901.webp',
    },
  },
];
const CompanyTab = () => {
  return (
    <FlatList
      style={styles.list}
      data={data}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      renderItem={({item}) => <CardCompany item={item} />}
    />
  );
};

export default CompanyTab;

const styles = StyleSheet.create({
  list: {
    marginVertical: 8,
    padding: 10,
  },
});
