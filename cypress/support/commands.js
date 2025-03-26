Cypress.Commands.add('uploadFile', (url, formData, token) => {
    return cy.window().then((win) => {
      return new Cypress.Promise((resolve, reject) => {
        const xhr = new win.XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Authorization', token);
  
        xhr.onload = function () {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        };
  
        xhr.onerror = function () {
          reject(xhr.response);
        };
  
        xhr.send(formData);
      });
    });
  });