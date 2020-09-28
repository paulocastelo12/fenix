import { Component, OnInit } from '@angular/core';
import { faBars, faBox, faCashRegister, faChevronDown, faCoffee, faCog, faFile, faFolder, faFolderPlus, faMoneyCheck, faMoneyCheckAlt, faShoppingBasket, faShoppingCart, faTachometerAlt, faTruck, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { SidebarService } from 'src/app/shared/services/sidebar.service';
import { IModuleStructure } from './siderbar.model';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.css']
})
export class SiderbarComponent implements OnInit {

  folderplus = faFolderPlus;
  shoppingcart = faShoppingBasket;
  truck = faTruck;
  cashregister = faCashRegister;
  box = faBox;
  userfriends = faUserFriends;
  moneycheck = faMoneyCheckAlt;
  cog = faCog;
  file = faFile;
  tachometer = faTachometerAlt;
  chevrondown = faChevronDown;
  bars = faBars;

  isOpended: boolean = true;
  isShowing = false;

  public modulos: IModuleStructure[] = [
    {
      id: 1,
      description: "Dashboard",
      dropDownTarget: "",
      imageIcon: this.tachometer,
      active: true
    },

    {
      id: 2,
      description: "Caixa",
      dropDownTarget: "caixa",
      imageIcon: this.moneycheck,
      dropDownCollapse: false,
      active: false
    },
    {
      id: 3,
      description: "Clientes",
      dropDownTarget: "clientes",
      imageIcon: this.userfriends,
      dropDownCollapse: false,
      active: false
    },
    {
      id: 4,
      description: "Diversos",
      dropDownTarget: "diversos",
      imageIcon: this.folderplus,
      dropDownCollapse: false,
      subMenuList: [["Agenda", "agenda"], ["Calculadora"], ["Categoria"], ["Usuários"]],
      active: false
    },
    {
      id: 5,
      description: "Estoque",
      dropDownTarget: "estoque",
      imageIcon: this.box,
      active: false
    },
    {
      id: 6,
      description: "Fornecedores",
      dropDownTarget: "fornrcedores",
      imageIcon: this.truck,
      active: false
    },
    {
      id: 7,
      description: "Frente de Caixa",
      dropDownTarget: "frentecaixa",
      imageIcon: this.cashregister,
      active: false
    },
    {
      id: 8,
      description: "Configurações",
      dropDownTarget: "configuracao",
      imageIcon: this.cog,
      active: false
    },
    {
      id: 9,
      description: "Relatórios",
      dropDownTarget: "relatorios",
      imageIcon: this.file,
      active: false
    }

  ];


  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.sidebarService.emitirActionSide.subscribe(
      isOpenBar => this.isOpended = isOpenBar
    );
  }

  
  changeSetting(modulo: IModuleStructure): void{
    modulo.dropDownCollapse=!modulo.dropDownCollapse;
    modulo.active = true;

    for (var val of this.modulos) {
      if(modulo.id != val.id) val.active = false;
    }
  }

  mouseenter() {
    if (!this.isOpended) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isOpended) {
      this.isShowing = false;
    }
  }

  formatterRouterLinkSubMenu(link: string): string {
    console.log(link);
    return link;
  }

}
