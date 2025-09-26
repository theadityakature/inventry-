import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product.model';
import { Navbar } from '../../navbar/navbar';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule,Navbar],
  templateUrl: './product.html',
  styleUrls: ['./product.css']
})
export class ProductComponent {
  products: Product[] = [
    {
      productId: 33,
      name: "Honor",
      brand: "Honor 11",
      model: "note11",
      ram: "12GB",
      storage: "256GB",
      color: "blue",
      price: 10000.00,
      accessories: "Charger",
      warranty: "1 Year",
      status: "Active"
    },
    // Add more sample products to test pagination
    {
      productId: 34,
      name: "iPhone 13",
      brand: "Apple",
      model: "13 Pro",
      ram: "6GB",
      storage: "128GB",
      color: "Graphite",
      price: 999.00,
      accessories: "Charger, EarPods",
      warranty: "1 Year",
      status: "Active"
    },
    {
      productId: 35,
      name: "Galaxy S21",
      brand: "Samsung",
      model: "S21 Ultra",
      ram: "12GB",
      storage: "256GB",
      color: "Phantom Black",
      price: 1199.99,
      accessories: "Charger, Cable",
      warranty: "2 Years",
      status: "Active"
    },
    {
      productId: 36,
      name: "Pixel 6",
      brand: "Google",
      model: "6 Pro",
      ram: "12GB",
      storage: "128GB",
      color: "Stormy Black",
      price: 899.00,
      accessories: "Charger, Cable",
      warranty: "1 Year",
      status: "Active"
    },
    {
      productId: 37,
      name: "Xperia 1",
      brand: "Sony",
      model: "1 III",
      ram: "12GB",
      storage: "256GB",
      color: "Frosted Black",
      price: 1299.99,
      accessories: "Charger, Headphones",
      warranty: "1 Year",
      status: "Inactive"
    },
    {
      productId: 38,
      name: "OnePlus 9",
      brand: "OnePlus",
      model: "9 Pro",
      ram: "8GB",
      storage: "128GB",
      color: "Morning Mist",
      price: 969.00,
      accessories: "Charger, Case",
      warranty: "1 Year",
      status: "Active"
    },
    {
      productId: 39,
      name: "Mi 11",
      brand: "Xiaomi",
      model: "11 Ultra",
      ram: "12GB",
      storage: "256GB",
      color: "Ceramic White",
      price: 1199.00,
      accessories: "Charger, Cable",
      warranty: "1 Year",
      status: "Active"
    },
    {
      productId: 40,
      name: "ROG Phone 5",
      brand: "ASUS",
      model: "5 Ultimate",
      ram: "16GB",
      storage: "256GB",
      color: "Matte White",
      price: 1299.00,
      accessories: "Charger, AeroActive Cooler",
      warranty: "1 Year",
      status: "Active"
    },
    {
      productId: 41,
      name: "Zenfone 8",
      brand: "ASUS",
      model: "8 Flip",
      ram: "8GB",
      storage: "128GB",
      color: "Galactic Black",
      price: 799.00,
      accessories: "Charger, Case",
      warranty: "1 Year",
      status: "Inactive"
    },
    {
      productId: 42,
      name: "Surface Duo 2",
      brand: "Microsoft",
      model: "Duo 2",
      ram: "8GB",
      storage: "128GB",
      color: "Glacier",
      price: 1499.99,
      accessories: "Charger, Pen",
      warranty: "1 Year",
      status: "Active"
    },
    {
      productId: 43,
      name: "Mate X2",
      brand: "Huawei",
      model: "X2",
      ram: "8GB",
      storage: "256GB",
      color: "Crystal Blue",
      price: 2499.00,
      accessories: "Charger, Case",
      warranty: "1 Year",
      status: "Active"
    },
    {
      productId: 44,
      name: "Galaxy Z Flip",
      brand: "Samsung",
      model: "Z Flip 3",
      ram: "8GB",
      storage: "256GB",
      color: "Cream",
      price: 999.99,
      accessories: "Charger, Case",
      warranty: "1 Year",
      status: "Active"
    },
    {
      productId: 45,
      name: "iPhone SE",
      brand: "Apple",
      model: "SE (2022)",
      ram: "4GB",
      storage: "64GB",
      color: "Red",
      price: 429.00,
      accessories: "Charger",
      warranty: "1 Year",
      status: "Active"
    },
    {
      productId: 46,
      name: "Nord 2",
      brand: "OnePlus",
      model: "Nord 2 5G",
      ram: "8GB",
      storage: "128GB",
      color: "Blue Haze",
      price: 399.00,
      accessories: "Charger, Case",
      warranty: "1 Year",
      status: "Inactive"
    }
  ];

  filteredProducts: Product[] = [];
  paginatedProducts: Product[] = [];
  searchTerm: string = '';
  selectedCategory: string = '';
  selectedStatus: string = '';
  showModal: boolean = false;
  
  // Toast notification properties
  showToast: boolean = false;
  toastMessage: string = '';
  toastType: 'success' | 'error' | 'warning' = 'success';
  
  
  // Pagination properties - Fixed 7 rows per page
  currentPage: number = 1;
  itemsPerPage: number = 7; // Fixed to 7 rows
  totalPages: number = 1;

  newProduct: Product = {
    productId: 0,
    name: '',
    brand: '',
    model: '',
    ram: '',
    storage: '',
    color: '',
    price: 0,
    accessories: '',
    warranty: '',
    status: 'Active'
  };

  constructor() {
    this.filteredProducts = [...this.products];
    this.updatePagination();
  }

  // Toast notification methods
  showNotification(message: string, type: 'success' | 'error' | 'warning' = 'success') {
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;
    
    // Auto hide after 3 seconds
    setTimeout(() => {
      this.hideNotification();
    }, 3000);
  }

  hideNotification() {
    this.showToast = false;
  }

  // Pagination methods
  updatePagination() {
    this.totalPages = Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    
    // Ensure current page is valid
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages > 0 ? this.totalPages : 1;
    }
    
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedProducts = this.filteredProducts.slice(startIndex, endIndex);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  goToPage(page: number | string) {
    if (typeof page === 'number' && page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagination();
    }
  }

  getPageNumbers(): (number | string)[] {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;
    
    if (this.totalPages <= maxVisiblePages) {
      // Show all pages if total pages is less than max visible
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      // Calculate start and end of visible page range
      let startPage = Math.max(2, this.currentPage - 1);
      let endPage = Math.min(this.totalPages - 1, this.currentPage + 1);
      
      // Adjust if we're at the beginning
      if (this.currentPage <= 3) {
        endPage = 4;
      }
      
      // Adjust if we're at the end
      if (this.currentPage >= this.totalPages - 2) {
        startPage = this.totalPages - 3;
      }
      
      // Add ellipsis if needed after first page
      if (startPage > 2) {
        pages.push('...');
      }
      
      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      // Add ellipsis if needed before last page
      if (endPage < this.totalPages - 1) {
        pages.push('...');
      }
      
      // Always show last page
      pages.push(this.totalPages);
    }
    
    return pages;
  }

  getStartIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  getEndIndex(): number {
    const end = this.currentPage * this.itemsPerPage;
    return end > this.filteredProducts.length ? this.filteredProducts.length : end;
  }

  // Product CRUD methods
  addProduct() {
  if (this.newProduct.productId === 0) {
    // Add new product
    this.newProduct.productId = Math.max(...this.products.map(p => p.productId), 0) + 1;
    this.products.push({ ...this.newProduct });
    this.showNotification('Product added successfully!', 'success');
  } else {
    // Update existing product
    const index = this.products.findIndex(p => p.productId === this.newProduct.productId);
    if (index !== -1) {
      this.products[index] = { ...this.newProduct };
      this.showNotification('Product updated successfully!', 'success');
    }
  }
  
  this.filterProducts();
  this.closeModal();
  this.resetForm();
}

deleteProduct(id: number) {
  if (confirm('Are you sure you want to delete this product?')) {
    const productName = this.products.find(p => p.productId === id)?.name || 'Product';
    this.products = this.products.filter(p => p.productId !== id);
    this.filterProducts();
    this.showNotification(`"${productName}" has been deleted successfully!`, 'success');
  }
}

  editProduct(product: Product) {
    this.newProduct = { ...product };
    this.showModal = true;
  }

 

  // Enhanced global search functionality
  filterProducts() {
    const searchTerm = this.searchTerm.toLowerCase().trim();
    
    this.filteredProducts = this.products.filter(product => {
      // If no search term, check only category and status filters
      if (!searchTerm) {
        const matchesCategory = !this.selectedCategory || true; // Add your category logic if needed
        const matchesStatus = !this.selectedStatus || product.status === this.selectedStatus;
        return matchesCategory && matchesStatus;
      }
      
      // Global search across all product properties
      const searchableProperties = [
        product.name,
        product.brand,
        product.model,
        product.ram,
        product.storage,
        product.color,
        product.accessories,
        product.warranty,
        product.status,
        product.price.toString()
      ];
      
      // Check if any property contains the search term
      const matchesSearch = searchableProperties.some(prop => 
        prop.toLowerCase().includes(searchTerm)
      );
      
      const matchesCategory = !this.selectedCategory || true; // Add your category logic if needed
      const matchesStatus = !this.selectedStatus || product.status === this.selectedStatus;
      
      return matchesSearch && matchesCategory && matchesStatus;
    });
    
    this.updatePagination();
  }

  resetForm(openModal: boolean = false) {
    this.newProduct = {
      productId: 0,
      name: '',
      brand: '',
      model: '',
      ram: '',
      storage: '',
      color: '',
      price: 0,
      accessories: '',
      warranty: '',
      status: 'Active'
    };

    if (openModal) {
      this.showModal = true;
    }
  }

  openAddModal() {
    this.resetForm();
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.resetForm();
  }
}