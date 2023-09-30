<template>
    <div class="container">
      <h1 class="heading">Classroom</h1>
  
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Vārds</th>
            <th>Balles</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in students" :key="student.name" :class="{ 'top-student': index < 3 }">
            <td>{{ index + 1 }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.points }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        students: [
          { name: 'Anonīms', points: 836 },
          { name: 'Anonīms', points: 836 },
            { name: 'Kristaps Ešmits', points: 624 },
            { name: 'Vladislavs Šušpanovs', points: 470 },
            { name: 'Anonīms', points: 836 },
            { name: 'Kristaps Ešmits', points: 624 },
            { name: 'Vladislavs Šušpanovs', points: 470 },
            { name: 'Iļja Rimša', points: 467 },
            { name: 'Ilona Grebņova', points: 402 },
            { name: 'Armands Liepa', points: 398 },
            { name: 'Katrīna Gandzjuka', points: 369 },
            { name: 'Anonīms', points: 243 },
            { name: 'Anonīms', points: 229 },
            { name: 'Aleksandrs Loceks', points: 188 },
            { name: 'Edgars Bērziņš', points: 150 },
            { name: 'Markuss Priede', points: 83 },
            { name: 'Kirils Kožemjakins', points: 77 },
            { name: 'Anonīms', points: 68 },
            { name: 'Anonīms', points: 34 },
            { name: 'Arnolds Bērziņš', points: 32 },
            { name: 'Anonīms', points: 23 }
        ]
      };
    }
  };
  </script>
  
  
  <style scoped>
  body {
    font-family: Arial, sans-serif;
  }
  
  .heading {
    text-align: center;
    margin-bottom: 20px;
    font-size: 32px;
    color: #173744;
  }
  
  .table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  .table th, .table td {
    border: 1px solid #ccc;
    padding: 12px;
    text-align: left;
  }
  
  .table th {
    background-color: #6dc6cb;
    color: #fff;
  }
  
  .table tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  
  .table tr.top-student td {
    color: #173744;
  }
  
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 30px;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .filter-container {
    margin-bottom: 20px;
  }
  
  .filter-container label {
    margin-right: 10px;
  }
  
  .filter-container input {
    padding: 6px;
    width: 150px;
  }
  </style>
  