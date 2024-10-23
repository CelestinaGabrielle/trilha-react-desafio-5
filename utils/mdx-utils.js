import { api } from '../services/api';

export const getPosts = async () => {
  const { data } = await api.get('/posts');
  if (data) {
    return data;
  }
  return [];
};

export const getPostBySlug = async (id) => {
  try {
    const { data } = await api.get(`/posts?id=eq.${id}`);
    console.log('Dados retornados pela API:', data); 
    if (data && data.length > 0) {
      return data[0]; 
    } else {
      console.log('Nenhum post encontrado');
      return null;
    }
  } catch (error) {
    console.error('Erro ao buscar o post:', error);
    return null;
  }
};
