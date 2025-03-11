const staticAssetServerUrlForCN =
  'https://7072-prod-9goxmz5w39f71724-1308749526.tcb.qcloud.la/';

export async function getStaticAssetServerUrl() {
  const domain = window.location.href;
  if (domain.includes('github') || domain.includes('http://')) {
    return domain;
  }
  return staticAssetServerUrlForCN;
}

export const MPNameMap: Record<string, string | undefined> = {
  root: 'RACINE',
  motherboard_mp: 'Carte Mère',
  power_mp: 'Alimentation',
  fan1_mp: 'Ventilateur 1',
  fan2_mp: 'Ventilateur 2',
  fan3_mp: 'Ventilateur 3',
  fan4_mp: 'Ventilateur 4',
  fan5_mp: 'Ventilateur 5',
  nvmessd_mp1: 'SSD Emplacement 1',
  nvmessd_mp2: 'SSD Emplacement 2',
  cooler_mp: 'Refroidisseur',
  cpu_mp: 'Processeur',
  pcie_mp: 'Carte Graphique',
  ddr4_ram_mp1: 'Mémoire RAM 1',
  ddr4_ram_mp2: 'Mémoire RAM 2',
};
