# requisitos

* Configurar o java_home
```
C:\Program Files\Java\jdk-19\bin
```

* comando usado depois que baixar dentro da pasta
```
mvnw spring-boot:run
```

### Importação no material versão angular 13
* https://www.udemy.com/course/curso-de-angular-2-5-avancado/learn/lecture/18164794#overview

```
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { MatSort } from '@angular/material/sort';
import { MatSelect } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
```

# Ponto Inteligente API
API do sistema de ponto inteligente com Java e Spring Boot.
### Como executar a aplicação
Certifique-se de ter o Git instalado.
```
git clone https://github.com/m4rciosouza/ponto-inteligente-api-curso-angular-v2.git
cd ponto-inteligente-api-curso-angular-v2
./mvnw spring-boot:run
API será executada em http://localhost:8080
```
