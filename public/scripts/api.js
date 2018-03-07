/* global $ */
'use strict';

const api = {
  
  search: function (query, callback) {
    $.ajax({
      type: 'GET',
      url: '/notes/',
      dataType: 'json',
      data: query,
      success: callback
    });
  },
  
  details: function (id, callback) {
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: `/notes/${id}`,
      success: callback
    });
  },

  update: function(id, obj, callback) {
    $.ajax({
      type: 'PUT',
      url: `/notes/${id}`,
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify(obj),
      success: callback
    });
  },

  create: function (obj, callback) {
    $.ajax({
      type: 'POST',
      url: '/notes',
      contentType: 'application/json',
      dataType: 'json',
      processData: false,
      data: JSON.stringify(obj),
      success: callback
    });
  },

  remove: function (id, callback) {
    return $.ajax({
      type: 'DELETE',
      dataType: 'json',
      url: `/notes/${id}`,
      success: callback
    });
  }

}; 
