(()=>{"use strict";var t=[];var e=function(t){return function(t){var e=[],o={getTodos:function(){return e},deleteTodoFromTodos:function(t){e.splice(t,1)},addTodoToTodos:function(t){e.push(t)}};return Object.assign(o,{title:t})}(t)},o=function(e){return t.push(e)},n=function(){return t};const i=(document.body,{displayFormTodo:function(){return'\n      <form id="form">\n        <label for="title">Title</lable><br>\n        <input type="text" id="title">\n        <label for="description">Description</lable><br>\n        <input type="text" id="description">\n        <label for="projects-select">Select the project</label>\n        '.concat((t="",document.createElement("select").setAttribute("id","projects-select"),n().forEach((function(e){t+='<option value="'.concat(e.title,'">').concat(e.title,"</option>")})),t),'\n        <input type="submit" value="Submit">\n      </form>\n    ');var t}});o(e("Default Project")),console.log(i.displayFormTodo())})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC1hcHAvLi9zcmMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtYXBwLy4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3RvZG9saXN0LWFwcC8uL3NyYy9kb21RdWVyaWVzLmpzIiwid2VicGFjazovL3RvZG9saXN0LWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJwcm9qZWN0c0xpc3QiLCJsb2dpYyIsInRpdGxlIiwidG9kb3MiLCJwcm90byIsImdldFRvZG9zIiwiZGVsZXRlVG9kb0Zyb21Ub2RvcyIsImluZGV4Iiwic3BsaWNlIiwiYWRkVG9kb1RvVG9kb3MiLCJ0b2RvIiwicHVzaCIsIk9iamVjdCIsImFzc2lnbiIsInByb2plY3RzIiwicHJvamVjdCIsImRvY3VtZW50IiwiYm9keSIsImRpc3BsYXlGb3JtVG9kbyIsImh0bWwiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiZm9yRWFjaCIsImNvbnNvbGUiLCJsb2ciLCJxdWVyaWVzIl0sIm1hcHBpbmdzIjoibUJBQUEsSUFBTUEsRUFBZSxHQ0VyQixJQUFNQyxFQUNrQixTQUFDQyxHQUFZLE9ERHBCLFNBQUNBLEdBQ2hCLElBQU1DLEVBQVEsR0FDUkMsRUFBUSxDQUNaQyxTQURZLFdBRVYsT0FBT0YsR0FHVEcsb0JBTFksU0FLUUMsR0FDbEJKLEVBQU1LLE9BQU9ELEVBQU8sSUFHdEJFLGVBVFksU0FTR0MsR0FDYlAsRUFBTVEsS0FBS0QsS0FJZixPQUFPRSxPQUFPQyxPQUFPVCxFQUFPLENBQUVGLFVDZllZLENBQVNaLElBRC9DRCxFQU1zQixTQUFDYyxHQUFELE9BQWFmLEVBQWFXLEtBQUtJLElBTnJEZCxFQU9rQixrQkFBTUQsR0MyQjlCLFNBakNlZ0IsU0FBU0MsS0E0QmYsQ0FDTEMsZ0JBakJzQixXQWF0QixNQVphLG9TQUFILFFBVk5DLEVBQU8sR0FDSUgsU0FBU0ksY0FBYyxVQUMvQkMsYUFBYSxLQUFNLG1CQUMxQnBCLElBQXNCcUIsU0FBUSxTQUFDUCxHQUM3QkksR0FBUSxrQkFBSixPQUFzQkosRUFBUWIsTUFBOUIsYUFBd0NhLEVBQVFiLE1BQWhELGdCQUVDaUIsR0FJRyx1RUFYVSxJQUNoQkEsS0NGUmxCLEVBRGdCQSxFQUFvQixvQkFFcENzQixRQUFRQyxJQUFJQyxzQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJvamVjdHNMaXN0ID0gW107XG5cbmNvbnN0IHByb2plY3RzID0gKHRpdGxlKSA9PiB7XG4gIGNvbnN0IHRvZG9zID0gW107XG4gIGNvbnN0IHByb3RvID0ge1xuICAgIGdldFRvZG9zKCkge1xuICAgICAgcmV0dXJuIHRvZG9zO1xuICAgIH0sXG5cbiAgICBkZWxldGVUb2RvRnJvbVRvZG9zKGluZGV4KSB7XG4gICAgICB0b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH0sXG5cbiAgICBhZGRUb2RvVG9Ub2Rvcyh0b2RvKSB7XG4gICAgICB0b2Rvcy5wdXNoKHRvZG8pO1xuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG8sIHsgdGl0bGUgfSk7XG59O1xuXG5jb25zdCB0b2RvcyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGluZGV4UHJvamVjdCkgPT4ge1xuICBjb25zdCBpc0NvbXBsZXRlID0gZmFsc2U7XG4gIGNvbnN0IHByb3RvID0ge1xuICAgIHNldEluZGV4UHJvamVjdChpbmRleCkge1xuICAgICAgaW5kZXhQcm9qZWN0ID0gaW5kZXg7XG4gICAgfSxcbiAgICBnZXRJbmRleFByb2plY3QoKSB7IHJldHVybiBpbmRleFByb2plY3Q7IH0sXG4gIH07XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG8sIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBpc0NvbXBsZXRlIH0pO1xufTtcblxuZXhwb3J0IHsgcHJvamVjdHNMaXN0LCBwcm9qZWN0cywgdG9kb3MgfTsiLCJpbXBvcnQgeyBwcm9qZWN0c0xpc3QsIHByb2plY3RzLCB0b2RvcyB9IGZyb20gJy4vdG9kb3MnO1xuXG5jb25zdCBsb2dpYyA9ICgoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAodGl0bGUpID0+IHsgcmV0dXJuIHByb2plY3RzKHRpdGxlKTsgfTtcbiAgY29uc3QgY3JlYXRlVG9kbyA9ICh0aXRsZSA9ICdNeSBUaXRsZScsIGRlc2NyaXB0aW9uID0gJ0FkZCBzb21lIGRlc2NyaXB0aW9uJywgaW5kZXhQcm9qZWN0ID0gMCkgPT4ge1xuICAgIGNvbnN0IHRvZG8gPSB0b2Rvcyh0aXRsZSwgZGVzY3JpcHRpb24sIGluZGV4UHJvamVjdCk7XG4gICAgcHJvamVjdHNMaXN0W2luZGV4UHJvamVjdF0uYWRkVG9kb1RvVG9kb3ModG9kbyk7XG4gIH07XG4gIGNvbnN0IGFkZFRvUHJvamVjdHNMaXN0ID0gKHByb2plY3QpID0+IHByb2plY3RzTGlzdC5wdXNoKHByb2plY3QpO1xuICBjb25zdCBmZXRjaFByb2plY3RzID0gKCkgPT4gcHJvamVjdHNMaXN0O1xuICBjb25zdCBhZGRUb2RvVG9Qcm9qZWN0ID0gKHRvZG8sIHByb2plY3QpID0+IHsgcHJvamVjdC5hZGRUb2RvVG9Ub2Rvcyh0b2RvKTsgfTtcbiAgY29uc3QgZmVjdGhUb2RvTGlzdCA9IChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFRvZG9zKCk7XG4gIGNvbnN0IGVkaXRUb2RvID0gKHByb2plY3QsIGluZGV4LCBbdGl0bGUsIGRlc2NyaXB0aW9uLCBpbmRleFByb2plY3RdKSA9PiB7XG4gICAgY29uc3QgdG9kb3NMaXN0ID0gZmVjdGhUb2RvTGlzdChwcm9qZWN0KTtcbiAgICB0b2Rvc0xpc3RbaW5kZXhdLnRpdGxlID0gdGl0bGU7XG4gICAgdG9kb3NMaXN0W2luZGV4XS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRvZG9zTGlzdFtpbmRleF0uc2V0SW5kZXhQcm9qZWN0KGluZGV4UHJvamVjdCk7XG4gIH07XG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoaW5kZXgpID0+IHsgcmV0dXJuIHByb2plY3RzTGlzdC5zcGxpY2UoaW5kZXgsIDEpOyB9O1xuICBjb25zdCBtYXJrVG9kb0FzQ29tcGxldGVkID0gKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGZlY3RoVG9kb0xpc3QocHJvamVjdCk7XG4gICAgcmV0dXJuIGxpc3RbaW5kZXhdLmlzQ29tcGxldGUgPSAhbGlzdFtpbmRleF0uaXNDb21wbGV0ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgY3JlYXRlVG9kbyxcbiAgICBhZGRUb1Byb2plY3RzTGlzdCxcbiAgICBmZXRjaFByb2plY3RzLFxuICAgIGFkZFRvZG9Ub1Byb2plY3QsXG4gICAgZmVjdGhUb2RvTGlzdCxcbiAgICBlZGl0VG9kbyxcbiAgICBtYXJrVG9kb0FzQ29tcGxldGVkLFxuICAgIGRlbGV0ZVByb2plY3QsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBsb2dpYyB9OyIsImltcG9ydCB7IGZldGNoUHJvamVjdHMsIGxvZ2ljIH0gZnJvbSAnLi9sb2dpYyc7XG5cbmNvbnN0IHF1ZXJpZXMgPSAoKCkgPT4ge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuICBjb25zdCBkaXNwbGF5U2VsZWN0ID0gKCkgPT4ge1xuICAgIGxldCBodG1sID0gJyc7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdHMtc2VsZWN0Jyk7XG4gICAgbG9naWMuZmV0Y2hQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGh0bWwgKz0gYDxvcHRpb24gdmFsdWU9XCIke3Byb2plY3QudGl0bGV9XCI+JHtwcm9qZWN0LnRpdGxlfTwvb3B0aW9uPmA7XG4gICAgfSk7XG4gICAgcmV0dXJuIGh0bWw7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheUZvcm1Ub2RvID0gKCkgPT4ge1xuICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgICA8Zm9ybSBpZD1cImZvcm1cIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU8L2xhYmxlPjxicj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFibGU+PGJyPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0cy1zZWxlY3RcIj5TZWxlY3QgdGhlIHByb2plY3Q8L2xhYmVsPlxuICAgICAgICAke2Rpc3BsYXlTZWxlY3QoKX1cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPlxuICAgICAgPC9mb3JtPlxuICAgIGA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGRpc3BsYXlGb3JtVG9kbyxcbiAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcmllczsiLCJpbXBvcnQgeyBsb2dpYyB9IGZyb20gJy4vbG9naWMnO1xuaW1wb3J0IHF1ZXJpZXMgZnJvbSAnLi9kb21RdWVyaWVzJztcblxuY29uc3QgcHJvamVjdCA9IGxvZ2ljLmNyZWF0ZVByb2plY3QoJ0RlZmF1bHQgUHJvamVjdCcpO1xubG9naWMuYWRkVG9Qcm9qZWN0c0xpc3QocHJvamVjdCk7XG5jb25zb2xlLmxvZyhxdWVyaWVzLmRpc3BsYXlGb3JtVG9kbygpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=