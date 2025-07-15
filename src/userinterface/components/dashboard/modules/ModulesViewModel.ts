import { useState, useEffect, useCallback } from "react";
import { ModulePresentation } from "@/infrastructure/presenters/modules.presenter";
import {
  getAllModulesAction,
  getModulesByCourseIdAction,
  getModuleByIdAction,
} from "@/userinterface/actions/modules.actions";

interface ModulesViewModelState {
  modules: ModulePresentation[];
  isLoading: boolean;
  error: string | null;
}

export function useModulesViewModel() {
  const [state, setState] = useState<ModulesViewModelState>({
    modules: [],
    isLoading: false,
    error: null,
  });

  const loadAllModules = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const result = await getAllModulesAction();

      setState({
        modules: result.data,
        isLoading: false,
        error: result.error,
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : "Unknown error",
      }));
    }
  }, []);

  const loadModulesByCourseId = useCallback(async (courseId: string) => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const result = await getModulesByCourseIdAction(courseId);

      setState({
        modules: result.data,
        isLoading: false,
        error: result.error,
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : "Unknown error",
      }));
    }
  }, []);

  return {
    ...state,
    loadAllModules,
    loadModulesByCourseId,
  };
}

export function useModuleViewModel(moduleId: string | null) {
  const [state, setState] = useState<{
    module: ModulePresentation | null;
    isLoading: boolean;
    error: string | null;
  }>({
    module: null,
    isLoading: false,
    error: null,
  });

  const loadModule = useCallback(async (id: string) => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const result = await getModuleByIdAction(id);

      setState({
        module: result.data,
        isLoading: false,
        error: result.error,
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : "Unknown error",
      }));
    }
  }, []);

  useEffect(() => {
    if (moduleId) {
      loadModule(moduleId);
    }
  }, [moduleId, loadModule]);

  return {
    ...state,
    loadModule,
  };
}
