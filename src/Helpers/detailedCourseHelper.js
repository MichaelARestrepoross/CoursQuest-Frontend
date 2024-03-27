export const enrollCourse = async (courseId, userId, enrolled) => {
    try {
      // Fetch the original course data
      const response = await fetch(`http://localhost:3003/api/courses/${courseId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch course data');
      }
      const courseData = await response.json();
  
      // Modify the course data with updated user_id
      const updatedCourseData = {
        ...courseData,
        user_id: enrolled ? userId : null,
      };
  
      // Send a PUT request to update the course
      const updateResponse = await fetch(`http://localhost:3003/api/courses/${courseId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCourseData),
      });
  
      if (!updateResponse.ok) {
        throw new Error('Failed to update enrollment status');
      }
    } catch (error) {
      console.error('Error updating enrollment:', error);
    }
  };
  