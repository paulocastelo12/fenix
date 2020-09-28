export interface IModuleStructure
{
    id: number;
    description: string;
    dropDownTarget: string;
    imageIcon;
    dropDownCollapse?: boolean;
    subMenuList?: string[];
    active?: boolean;
}
